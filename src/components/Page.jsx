import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io';

const Page = ({ search, people, removePerson, changeFollow, unFollow }) => {
    const [userUnFollow, setUserUnFollow] = useState(false);
    return (
        <div>
            {people.filter((person) => {
                if (search === '') {
                    return person;
                }
                else if (person.name.toLowerCase().includes(search.toLowerCase())) {
                    return person;
                }
            }).map((person) => {
                const { name, id, image, btn } = person;
                return (
                    <div className='flex justify-between items-center px-5 py-5 text-[#97A3CD]'>
                        <div className='flex items-center'>
                            <img className='w-[50px] h-[50px] rounded-[40%]' src={image} alt="" />
                            <div className='ml-4'>
                                <h3>{name}</h3>
                                <button onClick={() => changeFollow(id)} className={`${btn == 'following' ? 'bg-[#97A3CD] text-[#fff] rounded-full px-4' : 'bg-[#7D5BF0] px-4 text-white rounded-full text-[14px]'}`}>{person.btn}</button>
                            </div>
                        </div>
                        <div>
                            <IoMdClose onClick={() => removePerson(id)} className='text-[#97A3CD] cursor-pointer text-xl' />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Page