import { useParams } from "react-router"

export const GroupPageView = () => {
    const params = useParams();
    return (
        <div>
            <h1>{params.groupId}</h1>
        </div>
    )
}