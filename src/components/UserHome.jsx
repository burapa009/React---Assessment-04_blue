function UserHome() {
    const users = [
        { id: 1, name: "John", lastname: "Doe", position: "Developer" },
        { id: 2, name: "Jane", lastname: "Smith", position: "Designer" }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">User Home Sector</h1>
            
            {/* ตารางแสดงข้อมูลผู้ใช้ */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ชื่อ</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">นามสกุล</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ตำแหน่ง</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {users.map(user => (
                            <tr key={user.id}>
                                <td className="px-6 py-4">{user.id}</td>
                                <td className="px-6 py-4">{user.name}</td>
                                <td className="px-6 py-4">{user.lastname}</td>
                                <td className="px-6 py-4">{user.position}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserHome; 