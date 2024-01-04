import { IBreadcrumbs } from "@/app/types/breadcrumbs";
import Link from "next/link";
import cx from "classnames";

interface Props {
    breadcrumbs: IBreadcrumbs[];
    className?: string;
}

const Breadcrumbs = (props: Props) => {
    const { breadcrumbs, className } = props;

    return (
        <div className={cx("text-md breadcrumbs text-neutral-content font-semibold p-2", className)}>
            <ul>
                {breadcrumbs.map((d) => {
                    return <li key={d.id}>{d.href ? <Link href={d.href}>{d.label}</Link> : d.label}</li>;
                })}
            </ul>
        </div>
    );
};

export default Breadcrumbs;
