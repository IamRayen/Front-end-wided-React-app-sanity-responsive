import React from "react";

const Home = () => {
    return (
        <div className="homepage container-lg pt-2 pe-5 ps-5 text-center">
          <div className="pb-5">
            <div className="img-wrapper">
                <img
                className="homeimg"
                src={require("../Images/HomeImg-min.jpg")}
                alt="img"
                />
            </div>
            </div>
            <p className="display-6"><em>
                " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
                obcaecati debitis placeat, exercitationem non quasi? Voluptas,
                repellat aliquam mollitia libero sed pariatur, laboriosam
                perspiciatis tenetur deserunt totam cumque, rem quis. "
                </em>
            </p>
        </div>
    );
};

export default Home;
