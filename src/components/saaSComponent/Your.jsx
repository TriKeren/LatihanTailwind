const Your = () => {
    return (
        <div className="bg-[#043873] py-12 md:py-16 lg:py-14">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
                <h1 className="text-4xl md:text-6xl md:mb-14 font-bold lg:text-center text-white mb-5 lg:mb-10">
                    Your work, everywhere you are
                </h1>
                <p className="text-lg md:text-xl lg:text-lg lg:px-20 lg:text-center text-white mb-10">
                    Access your notes from your computer, phone, or tablet by synchronizing with various services, including Whitepace, Dropbox, and OneDrive. The app is available on Windows, macOS, Linux, Android, and iOS. A terminal app is also available!
                </p>
                <div className="flex lg:justify-center">
                    <button className="px-6 py-3 font-medium bg-[#4F9CF9] text-[#FFE492] rounded hover:bg-[#FFE492] hover:text-[#043873] transition-colors duration-300">
                        Try Taskey
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Your;
