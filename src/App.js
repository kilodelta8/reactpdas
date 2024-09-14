import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './assets/alexa.png';
import CortanaImage from './assets/cortana.png';
import SiriImage from './assets/siri.png';

function App(){
    return(
        <div>
            <div>
                <section className="hero is-primary">
                    <div className="hero-body">
                        <p className="title">Personal Digital Assistants</p>
                    </div>
                </section>
            </div>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard 
                                title="Alexa" 
                                handle="@alexa99" 
                                image={AlexaImage}
                                description="Alexa was created by Amazon and helps you buy things." 
                            />
                        </div>
                        <div className="column is-4">    
                            <ProfileCard 
                                title="Cortana" 
                                handle="@cortana32" 
                                image={CortanaImage}
                                description="Cortana was made by Micorsfot. Who knows what it does?" 
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                                title="Siri" 
                                handle="@siri01" 
                                image={SiriImage}
                                description="Siri was made by Apple and is being phased out." 
                            />
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
}


export default App;