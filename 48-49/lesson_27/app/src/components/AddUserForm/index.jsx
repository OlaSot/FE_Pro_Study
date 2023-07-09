import React, { useContext, useState } from 'react'
import s from './index.module.css'
import Select from 'react-select'
import { Context } from '../../context'


export default function AddUserForm() {

    const { teams, add_player } = useContext(Context)

    const [selectedTeam, setSelectedTeam] = useState(null)

    const submit = e => {
        e.preventDefault();
        const { user_name } = e.target;
        const newUSer = {
            id: Date.now(),
            user_name: user_name.value,
            team: selectedTeam 
        }
        add_player(newUSer);
        e.target.reset()
        setSelectedTeam(null)
    }
    return (
        <div>
            <form onSubmit={submit} className={s.user_form}>
                <label className={s.user_label}>
                    <p>Add user</p>
                    <input type="text" placeholder='User name' name='user_name' />
                </label>

                <Select options={teams} value={selectedTeam} onChange={setSelectedTeam} styles={{
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
