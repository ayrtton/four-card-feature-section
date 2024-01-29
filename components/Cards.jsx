function Cards() {
    return (
        <main>
            <h1>Reliable, efficient delivery <br/> Powered by Technology</h1>
            <p>Our Artificial Intelligence powered tools use millions of project data points 
            to ensure that your project is successful</p>
            <div id="cards">
                <div id="column-1">
                    <div className="card">
                        <h2>Supervisor</h2>
                        Monitors activity to identify project roadblocks
                    </div>
                </div>
                <div id="column-2">
                    <div className="card">
                        <h2>Team Builder</h2>
                        Scans our talent network to create the optimal team for your project
                    </div>
                    <div className="card">
                        <h2>Karma</h2>
                        Regularly evaluates our talent to ensure quality
                    </div>
                </div>
                <div id="column-3">
                    <div className="card">
                        <h2>Calculator</h2>
                        Uses data from past projects to provide better delivery estimates
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Cards;