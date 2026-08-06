import "./CategoryGrid.css";

function CategoryGrid() {

    return (

        <section>

            <h2 className="section-title">

                Browse Categories

            </h2>

            <div className="campaign-grid">

                <div className="campaign-card">

                    <h3>📚 Education</h3>

                    <p>
                        Explore all education related brand deals.
                    </p>

                </div>

                <div className="campaign-card">

                    <h3>🎮 Gaming</h3>

                    <p>
                        Gaming sponsorships and esports campaigns.
                    </p>

                </div>

                <div className="campaign-card">

                    <h3>💻 Technology</h3>

                    <p>
                        Mobile, laptop and software collaborations.
                    </p>

                </div>

                <div className="campaign-card">

                    <h3>💰 Finance</h3>

                    <p>
                        Finance and investment brand campaigns.
                    </p>

                </div>

                <div className="campaign-card">

                    <h3>🏋 Lifestyle</h3>

                    <p>
                        Fashion, fitness and travel collaborations.
                    </p>

                </div>

            </div>

        </section>

    );

}

export default CategoryGrid;