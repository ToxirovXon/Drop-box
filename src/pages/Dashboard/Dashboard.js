import React from 'react';
import StorageNavBar from '../../components/storage/StorageNavBar';
import { useFolder } from '../../components/hooks/useFolder';
import Folder from '../../components/storage/Folder';
import File from '../../components/storage/File';
import { useLocation, useParams } from "react-router-dom";
import FolderBreadcumps from '../../components/storage/FolderBreadcumps';
// import { getStorage, ref, deleteObject } from "firebase/storage";
// import { useAuth } from '../../components/store/AuthStore';
// import { doc, deleteDoc } from "firebase/firestore";
import "./Dashboard.css"

const Dashboard = () => {
    const { id } = useParams();
    const { state = {} } = useLocation
    const { folder, childFolders, childFiles } = useFolder(id, state.folder);
    console.log(childFolders)
    // const deleteFolder = async (name) => {
    //     const storage = getStorage();
    //     const currentPath = folder.path.map(u => u.name).join('/');
    //     const desertRef = ref(storage, currentPath ?
    //     `files/${currentUser.uid}/${currentPath}/${name}` :
    //     `files/${currentUser.uid}/${name}`);



    //     deleteObject(desertRef).then(() => {
    //         alert("Delete");
    //       }).catch((error) => {
    //         console.log(error)
    //       });
    // }

    return (
        <div className="container mx-auto">
            <div className="">
                <FolderBreadcumps currentFolder={folder}/>
            </div>
            <div className="">
                <StorageNavBar currentFolder={folder}/>
            </div>
            <div className="mt-6 border p-2"
                style={{ maxHeight: window.innerHeight - 300, height: window.innerHeight - 300 }}
            >
                { childFolders.length > 0 && (
                    <div>
                        {
                            childFolders.map(folder => (
                                <div
                                    className="content_form"
                                    key={folder.id}>
                                    <Folder folder={folder}/>
                                </div>
                            ))
                        }
                    </div>
                ) }
                {childFolders.length > 0 && childFiles.length > 0 && <hr />}
                { childFiles.length > 0 && (
                    <div>
                        {
                            childFiles.map(file => (
                                <div className="content_form" key={file.id}>
                                    <File file={file}/>
                                </div>
                            ))
                        }
                    </div>
                ) }
            </div>
        </div>
    );
};

export default Dashboard;
