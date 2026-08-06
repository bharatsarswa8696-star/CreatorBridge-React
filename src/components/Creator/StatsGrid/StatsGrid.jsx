import "./StatsGrid.css";

function StatsGrid() {

    return (

        <div className="stats-grid">

            <div className="stat-card">

                <h3 id="applicationCount">

                    0

                </h3>

                <p>

                    Applications

                </p>

            </div>

            <div className="stat-card">

                <h3 id="acceptedCount">

                    0

                </h3>

                <p>

                    Accepted

                </p>

            </div>

            <div className="stat-card">

                <h3 id="completedCount">

                    0

                </h3>

                <p>

                    Completed

                </p>

            </div>

            <div className="stat-card">

                <h3 id="walletBalance">

                    ₹0

                </h3>

                <p>

                    Wallet Balance

                </p>

            </div>

        </div>

    );

}

export default StatsGrid;