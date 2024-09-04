import React from "react";
import './Profile.css'

const Profile = () => {
    return (
        <div className="principal-div div-profile">
            <aside className="profile-page-aside">
                
                <div className="user-infor">
                    <div className="profile-name-photo">
                        <p className="user-name">charlles Dickens</p>
                        <img alt="img-profile" className="img-profile" src="data:image/jpeg;base64,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"></img>
                    </div>
                    
                    <ul className="user-description">
                        <li className="user-description-item">Escritor.</li>
                        <li className="user-description-item">Autor Best-seller.</li>
                        <li className="user-description-item">Entusiasta da leitura.</li>
                        <li className="user-description-item">Autor de David Cooperfield.</li>
                    </ul>
                </div>

                <div className="user-settings">
                    
                </div>
                
            </aside>

            <section className="user-section">

            </section>
        </div>
    )
}
export default Profile;