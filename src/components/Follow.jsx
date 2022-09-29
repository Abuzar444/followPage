import React, { useState } from 'react'
import { IoIosRefresh } from 'react-icons/io';
import data from './data'
import Form from './Form';
import Page from './Page';
const Follow = () => {
    const [people, setPeople] = useState(data);
    const [search, setSearch] = useState('');
    const [following, setFollowing] = useState('following');

    const removePerson = (id) => {
        let remove = people.filter((person) => person.id != id);
        setPeople(remove);
    }
    const changeFollow = (id) => {
        let follows = people.filter((follow) => {
            return follow.id == id ? `${follow.btn = following}` : `${follow.btn}`
        });
        setPeople(follows);
    }

    const unFollow = (id) => {
        let follows = people.filter((follow) => {
            return follow.id == id ? `${follow.btn}` : `${follow.btn = 'Follow'}`;
        })
        setPeople(follows);
        setFollowing(!following)
    }
    return (
        <div className='w-[350px] bg-[#E2F1F9] shadow-2xl'>
            <div className='flex justify-between items-center px-5 py-3 text-[#97A3CD]'>
                <h3>WHO TO FOLLOW</h3>
                <IoIosRefresh className='text-[#97A3CD] cursor-pointer' onClick={() => setPeople(data)} />
            </div>
            <div className='h-[.01rem] w-full bg-[#2A79F9]'></div>
            <Page removePerson={removePerson} changeFollow={changeFollow} search={search} people={people} unFollow={unFollow} />
            <hr />
            <Form search={search} setSearch={setSearch} />
        </div>
    )
}

export default Follow;