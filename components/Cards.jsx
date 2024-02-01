import calculator from "../assets/images/icon-calculator.svg";
import karma from "../assets/images/icon-karma.svg";
import supervisor from "../assets/images/icon-supervisor.svg";
import team_builder from "../assets/images/icon-team-builder.svg";

function Cards() {
    return (
        <main>
            <div id="header">
                <h1><span>Reliable, efficient delivery</span>Powered by Technology</h1>
                <p>Our Artificial Intelligence powered tools use millions of project data points 
                to ensure that your project is successful</p>
            </div>
            <div id="cards">
                <div id="column-1">
                    <div id="card-1">
                        <h2>Supervisor</h2>
                        <p>Monitors activity to identify project roadblocks</p>
                        <div className="icon">
                            <img src={supervisor} alt="supervisor" srcSet="" />
                        </div>
                    </div>
                </div>
                <div id="column-2">
                    <div id="card-2">
                        <h2>Team Builder</h2>
                        <p>Scans our talent network to create the optimal team for your project</p>
                        <div className="icon">
                            <img src={team_builder} alt="team_builder" srcSet="" />
                        </div>
                    </div>
                    <div id="card-3">
                        <h2>Karma</h2>
                        <p>Regularly evaluates our talent to ensure quality</p>
                        <div className="icon">
                            <img src={karma} alt="karma" srcSet="" />
                        </div>
                    </div>
                </div>
                <div id="column-3">
                    <div id="card-4">
                        <h2>Calculator</h2>
                        <p>Uses data from past projects to provide better delivery estimates</p>
                        <div className="icon">
                            <img src={calculator} alt="calculator" srcSet="" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Cards;