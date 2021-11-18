import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { getProductGroupsStart, getUserDataStart } from "../../store/actions";
import { AddItemMenuComponent } from "./components/create-item-menu.component";
import CategoryIcon from '@mui/icons-material/Category';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { CreateItemDialog } from "./components/create-item-dialog.component";
import { ProductGroupList } from "./components/product-groups-list.component";

export const HomeDashboardView = () => {
    const [dialogType, setDialogType] = useState(null)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserDataStart());
        dispatch(getProductGroupsStart());
    }, []);

    const handleCloseCreateDialog = useCallback(() => setDialogType(null), []);

    const openCreateAdminDialog = useCallback(() => setDialogType('admin'), []);

    const openCreateGroupDialog = useCallback(() => setDialogType('group'), []);

    const menuActions = useMemo(() => ([
        { icon: <CategoryIcon /> , name: "Добавить категорию", actionHandler: () => openCreateGroupDialog() },
        { icon: <PersonAddIcon />, name: "Добавить админа", actionHandler: () => openCreateAdminDialog() },
    ]), []);

    return (
        <div>
            <ProductGroupList />
            <AddItemMenuComponent actions={menuActions} />
            <CreateItemDialog
                type={dialogType}
                onClose={handleCloseCreateDialog}
            />
        </div>
    );
};
