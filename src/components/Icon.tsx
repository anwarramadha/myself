import { Icon as IconClass } from '@/interfaces/icon';
import { type IIcon } from '@/interfaces/icon';
import { BASE_URL } from '@consts';

type IconProps = {
  icon: IIcon;
  name?: string;
  width?: number | string;
};

export default function Icon({ name, icon, width }: IconProps) {
  console.log('icon asd', icon)
  const iconClass = new IconClass(icon);
  // Download the icon

  return (
    <div>
      {iconClass.isSvg() ? 
        // <svg class="size-6 fill-current">
        //   <use href={`${iconClass.getFullIconUrl()}#brand`}></use>
        // </svg>
        <svg class="size-6 fill-current">
          <use href={`${BASE_URL}/brand-copy.svg`}></use>
        </svg>
        :
        (
          <div>
            <img
              src={iconClass.getFullIconUrl()}
              alt={name}
              width={width}
              class="dark:hidden"
            />
            <img
              src={iconClass.getFullDarkIconUrl()}
              alt={name}
              width={width}
              class="hidden dark:block"
            />
          </div>
        )
      }
    </div>
  )
}
