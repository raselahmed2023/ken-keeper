import Image from 'next/image';
import Link from 'next/link';
import { MdSnooze } from "react-icons/md";
import { IoMdArchive } from "react-icons/io";
import { RiDeleteBin5Fill } from "react-icons/ri";
import CheckInButtons from '@/components/ui/CheckInButton';
import friendsData from '@/data/friends.json';




const DetailPage = async ({ params }) => {
    const { id } = await params;
    const friends = friendsData;
    const friend = friends.find((f) => f.id === parseInt(id));

    if (!friend) {
        return <div className="p-10 text-center text-red-500">Friend not found.</div>;
    }

    const getStatusStyle = (status) => {
        if (status === 'overdue') return 'bg-red-100 text-red-800';
        if (status === 'on-track') return 'bg-green-100 text-green-800';
        if (status === 'almost due') return 'bg-yellow-100 text-yellow-800';
        return '';
    };

    const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    return (
        <div className="max-w-4xl mx-auto px-6 py-10">


            <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 mb-6 inline-block">
                ← Back
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


                <div className="flex flex-col gap-4">


                    <div className="card bg-base-100 shadow-sm p-6 flex flex-col items-center text-center gap-3">
                        <div className="avatar">
                            <div className="w-24 h-24 rounded-full">
                                <Image src={friend.picture} alt={friend.name} width={96} height={96} />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">{friend.name}</h2>
                            <p className="text-sm text-gray-400 mt-1">Preferred: email</p>
                        </div>
                        <span className={`badge border-none font-semibold px-4 py-3 rounded-full capitalize text-sm ${getStatusStyle(friend.status)}`}>
                            {friend.status}
                        </span>
                        <div className="flex flex-wrap justify-center gap-2 mt-1">
                            {friend.tags.map((tag, i) => (
                                <span key={i} className="badge bg-green-100 text-green-800 border-none text-xs px-3 py-2 uppercase font-bold tracking-wide">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="text-sm text-gray-400 italic mt-1">{friend.bio}</p>
                    </div>


                    <div className="card bg-base-100 shadow-sm p-4 flex flex-col gap-2">
                        <button className="btn btn-sm btn-outline w-full"><MdSnooze /> Snooze 2 Weeks</button>
                        <button className="btn btn-sm btn-outline w-full"><IoMdArchive /> Archive</button>
                        <button className="btn btn-sm w-full text-red-500 border-red-300 hover:bg-red-50 hover:border-red-400">
                            <RiDeleteBin5Fill /> Delete
                        </button>
                    </div>
                </div>


                <div className="md:col-span-2 flex flex-col gap-4">


                    <div className="grid grid-cols-3 gap-4">
                        <div className="card bg-base-100 shadow-sm p-4 text-center">
                            <p className="text-3xl font-bold">{friend.days_since_contact}</p>
                            <p className="text-xs text-gray-400 mt-1">Days Since Contact</p>
                        </div>
                        <div className="card bg-base-100 shadow-sm p-4 text-center">
                            <p className="text-3xl font-bold">{friend.goal}</p>
                            <p className="text-xs text-gray-400 mt-1">Goal (Days)</p>
                        </div>
                        <div className="card bg-base-100 shadow-sm p-4 text-center">
                            <p className="text-xl font-bold">{formatDate(friend.next_due_date)}</p>
                            <p className="text-xs text-gray-400 mt-1">Next Due</p>
                        </div>
                    </div>


                    <div className="card bg-base-100 shadow-sm p-5">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="font-semibold text-base">Relationship Goal</h3>
                            <button className="btn btn-xs btn-outline">Edit</button>
                        </div>
                        <p className="text-sm text-gray-500">
                            Connect every <span className="font-bold text-black">{friend.goal} days</span>
                        </p>
                    </div>

                    <CheckInButtons friendName={friend.name} />



                    <div className="card bg-base-100 shadow-sm p-5">
                        <h3 className="font-semibold text-base mb-3">Contact Info</h3>
                        <div className="flex flex-col gap-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-400">Email</span>
                                <span className="text-blue-500">{friend.email}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Last Contact</span>
                                <span>{friend.days_since_contact} days ago</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailPage;