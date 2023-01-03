import React, { useState } from 'react';
import { FolderPlusIcon } from '@heroicons/react/20/solid';
import ConfirmAddFolder from './modals/ConfirmAddFolder';
import { useAuth } from './../store/AuthStore';
import { database } from '../../firebase';
import { ROOT_FOLDER } from './../hooks/useFolder';

const AddFolderBtn = ({ currentFolder }) => {
    const [open, setOpen] = useState(false);
    const { currentUser } = useAuth();

    const createFolder = async (name) => {
        if(name.trim()) {
            if(!currentFolder) return
            const path = [...currentFolder.path];

            if(currentFolder !== ROOT_FOLDER) {
                path.push({
                    name: currentFolder.name,
                    id: currentFolder.id
                });
            }

            await database.folders.add({
                name: name,
                parentId: currentFolder.id,
                userId: currentUser.uid,
                path: path,
                createdAt: database.getCurrentTimestamp(),
            })
            
        }
        setOpen(false);
    }

    return (
        <>
            <button onClick={() => setOpen(true)} className="foldr">
                <div className="folder">
                    <FolderPlusIcon
                        className="h-5 w-5 mr-1"
                        aria-hidden="true"
                    />
                    <span>Create Folder</span>
                </div>
            </button>
            <ConfirmAddFolder open={open} setOpen={setOpen} handleSubmit={createFolder}/>
        </>
    );
};

export default AddFolderBtn;
