interface Props {
    endpoint: string;
    query?: Record<string, string>;
    wrappedByKey?: string;
    wrappedByList?: boolean;
    additionalFields?: Array<{name: string, value: string | number}>;
  }
  
  /**
   * Fetches data from the Strapi API
   * @param endpoint - The endpoint to fetch from
   * @param query - The query parameters to add to the url
   * @param wrappedByKey - The key to unwrap the response from
   * @param wrappedByList - If the response is a list, unwrap it
   * @returns
   */
  export default async function fetchApi<T>({
    endpoint,
    query,
    wrappedByKey="data",
    wrappedByList,
    additionalFields,
  }: Props): Promise<T> {
    if (endpoint.startsWith('/')) {
      endpoint = endpoint.slice(1);
    }
  
    const url = new URL(`${import.meta.env.STRAPI_URL}/api/${endpoint}`);
  
    if (query) {
      Object.entries(query).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }
    let res
    try {
      // Fetch the data using bearer token
      res = await fetch(url.toString(), {
        headers: {
          Authorization: `Bearer ${import.meta.env.STRAPI_API_TOKEN}`,
        },
      });
    } catch(e) {
      console.log(e)
    }
    let data = await res?.json();
  
    if (wrappedByKey) {
      data = data[wrappedByKey];
    }

    if (data instanceof Array && data.length > 0) {
      data = data.map((item: any) => {
        if (additionalFields) {
          additionalFields.forEach((field) => {
            item[field.name] = field.value;
          });
        }
        return item;
      });
    }
  
    if (wrappedByList) {
      data = data[0];
    }
  
    return data as T;
  }
  