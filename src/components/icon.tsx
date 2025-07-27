import {ComponentProps, FC, SVGProps} from "react";
import {
    HomeIcon,
    UserIcon,
    CogIcon,
    ChevronRightIcon,
    PlusIcon,
    TrashIcon,
    PencilIcon,
} from "@heroicons/react/24/outline";

type IconName =
    | 'home'
    | 'user'
    | 'cog'
    | 'chevronRight'
    | 'plus'
    | 'trash'
    | 'pencil'
;

const iconMap: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
    home: HomeIcon,
    user: UserIcon,
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
