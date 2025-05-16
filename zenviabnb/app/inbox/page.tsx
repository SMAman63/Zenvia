import Conversation from "../components/inbox/Conversation";


const InboxPage = () =>{
    return(

        <main className="max-w-[1500px] mx-auto px-6 mt-15 pb-6 space-y-4">
            <h1 className="my-6 mb-2 text-2xl">Inbox</h1> 
            <Conversation />
            <Conversation />
            <Conversation />
        </main>
    )
}

export default InboxPage;