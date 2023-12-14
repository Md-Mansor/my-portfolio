


const Contact = () => {
    return (
        <div className="pt-28">
            <h1 className="font-extrabold text-5xl text-center p-5">Let's Start Something</h1>
            <div className="lg:flex justify-center gap-5 p-10 items-center">
                <div className="">
                    <div className="">
                        <div className=" flex-col lg:flex-row-reverse">
                            <div className="text-center lg:text-left">
                                <h1 className="text-5xl font-bold">Leave A Reply</h1>
                            </div>
                            <div className=" shadow-2xl bg-slate-800 rounded">
                                <form className="flex flex-col gap-5 p-5 m-5">
                                    <div className="form-control">
                                        <input type="name" placeholder="name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <input type="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <textarea className="textarea textarea-accent" placeholder="write something"></textarea>
                                    </div>
                                    <div className="py-6">
                                        <button className="btn btn-accent">submit Comment</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/5">
                    <div>
                        <h1 className="text-3xl font-bold">Feel Free to Contact <br /> Me Anytime</h1>
                    </div>
                    <div className="border p-10 bg-slate-600 my-2 rounded">
                        <p className="font-medium">Email</p>
                        <h1 className="font-bold text-white">mansor.me777@gmail.com</h1>
                    </div>
                    <div className="border p-10 bg-slate-600 my-2 rounded">
                        <p className="font-medium">Phone</p>
                        <h1 className="font-bold text-white">01710559563</h1>
                    </div>
                    <div className="border p-10 bg-slate-600 my-2 rounded">
                        <p className="font-medium">Address</p>
                        <h1 className="font-bold text-white">Sher-e-Bangla Nagar, Agargaon, Dhaka</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;