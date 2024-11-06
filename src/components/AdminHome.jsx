import { useState } from 'react';

function AdminHome() {
    const [users, setUsers] = useState([
        { id: 1, name: "John", lastname: "Doe", position: "Developer" },
        { id: 2, name: "Jane", lastname: "Smith", position: "Designer" },
        {id:3, name:"Blue", lastname:"Pratumchai", position:"CEO"}
    ]);

    const [newUser, setNewUser] = useState({
        name: '',
        lastname: '',
        position: ''
    });

    const handleAddUser = (e) => {
        e.preventDefault();
        const id = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
        setUsers([...users, { ...newUser, id }]);
        setNewUser({ name: '', lastname: '', position: '' });
    };

    const handleDeleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Admin Home Sector</h1>
            
            {/* Form เพิ่มผู้ใช้ */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-xl font-semibold mb-4">เพิ่มผู้ใช้ใหม่</h2>
                <form onSubmit={handleAddUser} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="ชื่อ"
                            value={newUser.name}
                            onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="นามสกุล"
                            value={newUser.lastname}
                            onChange={(e) => setNewUser({...newUser, lastname: e.target.value})}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="ตำแหน่ง"
                            value={newUser.position}
                            onChange={(e) => setNewUser({...newUser, position: e.target.value})}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <button 
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        เพิ่มผู้ใช้
                    </button>
                </form>
            </div>

            {/* ตารางแสดงข้อมูลผู้ใช้ */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ชื่อ</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">นามสกุล</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ตำแหน่ง</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">จัดการ</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {users.map(user => (
                            <tr key={user.id}>
                                <td className="px-6 py-4">{user.id}</td>
                                <td className="px-6 py-4">{user.name}</td>
                                <td className="px-6 py-4">{user.lastname}</td>
                                <td className="px-6 py-4">{user.position}</td>
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() => handleDeleteUser(user.id)}
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        ลบ
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminHome; 