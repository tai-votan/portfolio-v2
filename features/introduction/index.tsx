import Avatar from "@/features/introduction/avatar";
import Introduce from "@/features/introduction/introduce";

export default function Introduction() {
    return (
        <div className="flex flex-col lg:flex-row items-start relative">
            <Avatar />
            <Introduce />
        </div>
    );
}
