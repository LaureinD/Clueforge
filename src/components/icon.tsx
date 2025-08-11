import {ComponentProps, FC, SVGProps} from "react";
import {
    HomeIcon,
    UserIcon,
    UserPlusIcon,
    UserGroupIcon,
    CogIcon,
    ChevronRightIcon,
    PlusIcon,
    TrashIcon,
    PencilIcon,
} from "@heroicons/react/24/outline";

export type IconName =
    | 'home'
    | 'user'
    | 'userPlus'
    | 'userGroup'
    | 'cog'
    | 'chevronRight'
    | 'plus'
    | 'trash'
    | 'pencil'
;

const iconMap: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
    home: HomeIcon,
    user: UserIcon,
    userPlus: UserPlusIcon,
    userGroup: UserGroupIcon,
    cog: CogIcon,
    chevronRight: ChevronRightIcon,
    plus: PlusIcon,
    trash: TrashIcon,
    pencil: PencilIcon,
};

interface IconProps {
    name: IconName,
    className?: string,
}

export default function Icon({ name, className }: IconProps) {
    const IconComponent = iconMap[name];

    if (!IconComponent) return null;

    return <IconComponent className={className} />;
}
