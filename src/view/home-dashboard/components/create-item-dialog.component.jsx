import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { makeStyles } from '@mui/styles';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm, Controller } from 'react-hook-form';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createGroupStart } from '../../../store/actions';

const useDialogStryles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
})

const ProductGroupDialog = ({ onClose }) => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const classes = useDialogStryles();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const {name, description, imageUrl} = data;
    dispatch(createGroupStart({name, description, imageUrl}));
  }

  return (
    <>
      <DialogContent>
        <div className={classes.container}>
          <Controller
            name="name"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Pleasee add name"
              }
            }}
            defaultValue=""
            render={({ field: { value, onChange, onBlur } }) =>
              <TextField
                label="Название"
                sx={{ marginBottom: 1.5, marginTop: 1 }}
                value={value}
                onChange={onChange}
                onBlur={onBlur} />}
          />
          <Controller
            name="description"
            control={control}
            defaultValue=""
            rules={{
              required: {
                value: true,
                message: "Pleasee add description"
              }
            }}
            defaultValue=""
            render={({ field: { value, onChange, onBlur } }) =>
              <TextField
                label="Описание"
                sx={{ marginBottom: 1.5 }}
                value={value}
                onChange={onChange}
                onBlur={onBlur} />}
          />
          <Controller
            name="imageUrl"
            control={control}
            defaultValue=""
            rules={{
              required: {
                value: true,
                message: "Pleasee add description"
              }
            }}
            defaultValue=""
            render={({ field: { value, onChange, onBlur } }) =>
              <TextField
                label="Ссылка на картинку"
                value={value}
                sx={{ marginBottom: 1.5 }}
                onChange={onChange}
                onBlur={onBlur} />}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Отмена</Button>
        <Button variant="contained" onClick={handleSubmit(onSubmit)}>Созранить</Button>
      </DialogActions>
    </>
  )
}

// const ProductDialog = ({ onClose }) => {
//   const { control, handleSubmit, formState: { errors } } = useForm();
//   const classes = useDialogStryles();
//   const { groups } = useSelector(state => state.productGroups)

//   return (
//     <>
//       <DialogContent>
//         <div className={classes.container}>
//           <Controller
//             name="name"
//             control={control}
//             rules={{
//               required: {
//                 value: true,
//                 message: "Pleasee add name"
//               }
//             }}
//             defaultValue=""
//             render={({ field: { value, onChange, onBlur } }) =>
//               <TextField
//                 label="Название"
//                 sx={{ marginBottom: 1.5, marginTop: 1 }}
//                 value={value}
//                 onChange={onChange}
//                 onBlur={onBlur} />}
//           />
//           <Controller
//             name="description"
//             control={control}
//             defaultValue=""
//             rules={{
//               required: {
//                 value: true,
//                 message: "Pleasee add description"
//               }
//             }}
//             defaultValue=""
//             render={({ field: { value, onChange, onBlur } }) =>
//               <TextField
//                 label="Описание"
//                 sx={{ marginBottom: 1.5 }}
//                 value={value}
//                 onChange={onChange}
//                 onBlur={onBlur} />}
//           />
//           <Controller
//             name="imageUrl"
//             control={control}
//             defaultValue=""
//             rules={{
//               required: {
//                 value: true,
//                 message: "Pleasee add description"
//               }
//             }}
//             defaultValue=""
//             render={({ field: { value, onChange, onBlur } }) =>
//               <TextField
//                 label="Ссылка на картинку"
//                 value={value}
//                 sx={{ marginBottom: 1.5 }}
//                 onChange={onChange}
//                 onBlur={onBlur} />}
//           />
//           <Controller
//             name="price"
//             control={control}
//             defaultValue=""
//             rules={{
//               required: {
//                 value: true,
//                 message: "Pleasee add description"
//               }
//             }}
//             defaultValue=""
//             render={({ field: { value, onChange, onBlur } }) =>
//               <TextField
//                 label="Цена"
//                 value={value}
//                 sx={{ marginBottom: 1.5 }}
//                 onChange={onChange}
//                 onBlur={onBlur} />}
//           />
//           <Controller
//             name="groupId"
//             control={control}
//             defaultValue=""
//             rules={{
//               required: {
//                 value: true,
//                 message: "Pleasee add description"
//               }
//             }}
//             render={({ field: { value, onChange, onBlur } }) =>
//               <FormControl fullWidth>
//                 <InputLabel id="group-dialog-select-label">Группа</InputLabel>
//                 <Select labelId="group-dialog-select-label" value={value} onChange={onChange} onBlur={onBlur} label="Группа">
//                   {
//                     groups.map(group => <MenuItem key={group.id} value={group.id}>{group.name}</MenuItem>)
//                   }
//                 </Select>
//               </FormControl>}

//           />
//         </div>
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={onClose}>Отмена</Button>
//         <Button variant="contained" onClick={onClose}>Созранить</Button>
//       </DialogActions>
//     </>
//   )
// }

const AdminDialog = ({ onClose }) => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const classes = useDialogStryles();
  const dispatch = useDispatch();

  // const onSubmit = data => {
  //   d
  // }

  return (
    <>
      <DialogContent>
        <div className={classes.container}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Pleasee add name"
              }
            }}
            defaultValue=""
            render={({ field: { value, onChange, onBlur } }) =>
              <TextField
                label="Email"
                sx={{ marginBottom: 1.5, marginTop: 1 }}
                value={value}
                onChange={onChange}
                onBlur={onBlur} />}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: {
                value: true,
                message: "Pleasee add description"
              }
            }}
            defaultValue=""
            render={({ field: { value, onChange, onBlur } }) =>
              <TextField
                label="Password"
                sx={{ marginBottom: 1.5 }}
                value={value}
                type="password"
                onChange={onChange}
                onBlur={onBlur} />}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Отмена</Button>
        <Button variant="contained" onClick={onClose}>Созранить</Button>
      </DialogActions>
    </>
  )
}

export const CreateItemDialog = ({ onClose, type }) => {
  if (!type) {
    return null;
  }

  const dialogs = {
    group: { component: () => <ProductGroupDialog onClose={onClose} />, headerTitle: "Создать группу" },
    admin: { component: () => <AdminDialog onClose={onClose} />, headerTitle: "Создать нового админа" }
  }

  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>{dialogs[type].headerTitle}</DialogTitle>
      {dialogs[type].component()}
    </Dialog>
  )
}