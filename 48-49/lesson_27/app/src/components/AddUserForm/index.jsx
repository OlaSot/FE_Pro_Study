import React, { useContext } from 'react'
import s from './index.module.css'
import Select from 'react-select'
import { Context } from '../../context'


export default function AddUserForm() {

    const { teams } = useContext(Context)

    const submit = e => {
        e.preventDefault();
        const { user_name } = e.target;
        console.log(user_name.value);
        e.target.reset()
    }
    return (
        <div>
            <form onSubmit={submit} className={s.user_form}>
                <label className={s.user_label}>
                    <p>Add user</p>
                    <input type="text" placeholder='User name' name='user_name' />
                </label>

                <Select options={teams} styles={{
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderColor: state.isFocused ? 'grey' : 'blue',
                        marginBottom: '10px'
                        }),
  }}
/>
                <button>Add</button>

            </form>
        </div>
    )
}
