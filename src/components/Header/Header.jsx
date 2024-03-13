import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <>
           <header className='flex justify-between p-4 border-b-2 max-w-6xl mx-auto items-center'>
            <h1 className='text-4xl font-bold text-orange-500 text-center '>Knowledge Cafe</h1>
            <img src={profile} alt="" />
           
        </header>
     
        </>
        
    );
};

export default Header;