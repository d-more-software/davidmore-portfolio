import { Code } from "lucide-react"

const Navbar = () => {
    return (
        <div className="flex justify-center md:justify-between items-center p-4 ">
            <a href="#"
                className="flex items-center  font-bold  text-3xl md:text-xl"
            >
                <Code className="mr-2" />
                David
                <span className="text-accent ml-1">More</span>
            </a>

            <ul
                className="hidden md:flex space-x-4">
                <li>
                    <a href="#About"
                        className="btn btn-sm btn-ghost"
                    >
                        About
                    </a>
                </li>
                <li>
                    <a href="#Skills"
                        className="btn btn-sm btn-ghost"
                    >
                        Skills
                    </a>
                </li>

                <li>
                    <a href="#Projects"
                        className="btn btn-sm btn-ghost"
                    >
                        Projects
                    </a>
                </li>



            </ul>

        </div>
    )
}

export default Navbar
