import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { getUserDataStart } from "../../store/actions";
import { AddItemMenuComponent } from "./components/create-item-menu.component";
import CategoryIcon from '@mui/icons-material/Category';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CreateItemDialog } from "./components/create-item-dialog.component";

export const HomeDashboardView = () => {
    const [dialogType, setDialogType] = useState(null)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserDataStart());
    }, []);

    const handleCloseCreateDialog = useCallback(() => setDialogType(null), []);

    const openCreateProductDialog = useCallback(() => setDialogType('product'), []); // TODO: move to constant enum

    const openCreateAdminDialog = useCallback(() => setDialogType('admin'), []);

    const openCreateGroupDialog = useCallback(() => setDialogType('group'), []);

    const menuActions = useMemo(() => ([
        { icon: <CategoryIcon /> , name: "Добавить категорию", actionHandler: () => openCreateGroupDialog() },
        { icon: <AddShoppingCartIcon />, name: "Добавить продукт", actionHandler: () => openCreateProductDialog() },
        { icon: <PersonAddIcon />, name: "Добавить админа", actionHandler: () => openCreateAdminDialog() },
    ]), []);

    return (
        <div>
            <AddItemMenuComponent actions={menuActions} />
            <CreateItemDialog
                type={dialogType}
                onClose={handleCloseCreateDialog}
            />
        </div>
    );
};
