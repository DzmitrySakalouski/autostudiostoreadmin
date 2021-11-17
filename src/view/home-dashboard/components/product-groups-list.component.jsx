import { useSelector } from "react-redux";
import { ProductGroupItem } from "./product-group.component";

export const ProductGroupList = () => {
    const {groups} = useSelector(state => state.productGroups);
    if (!groups?.length) {
        return (
            <h1>Групп нет</h1>
        )
    }

    return (
        <div>
            {groups.map(group => (
                <ProductGroupItem key={group.id} name={group.name} description={group.description} />
            ))}
        </div>
    )
}