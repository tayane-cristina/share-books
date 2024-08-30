import React from "react";
import './Profile.css'

const Profile = () => {
    return (
        <div className="principal-div div-profile">
            <aside className="profile-page-aside">
                
                <div className="user-infor">
                    <p className="user-name">charlles Dickens</p>
                    <img alt="img-profile" className="img-profile" src="data:image/jpeg;base64,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"></img>
                    <ul className="user-description">
                        <li className="user-description-item">- Escritor.</li>
                        <li className="user-description-item">- Autor Best-seller.</li>
                        <li className="user-description-item">- Entusiasta da leitura.</li>
                        <li className="user-description-item">- Autor de David Cooperfield.</li>
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