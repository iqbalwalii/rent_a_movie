import React from "react";
import "./Detail.css";

const Detail = () => {
  return (
    <section id="movie-details" className="container">
      <div className="movie-header">
        <div className="movie-poster">
          <img src="/assets/images/madmax.jpg" alt="poster" />
        </div>
        <div className="movie-right">
          <h2 className="detail-name">Harry puttar and the goblat of fire</h2>
          <p className="detail-info">
            <span>130</span>
            <span>2020</span>
            <span>genre / genre</span>
            <span>rating</span>
          </p>
          <p className="detail-language">
            <span>Language</span>
            <span>Language</span>
          </p>
          <p className="detail-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
            sapiente impedit beatae architecto laborum laudantium aperiam vel
            tempora autem aliquid? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Unde sapiente sunt vero tempore quas facilis
            provident assumenda veniam temporibus, totam iste cum culpa cumque
            dolore dicta qui ipsum minus quae laboriosam dolorum aut iusto velit
            aliquid. Architecto omnis non impedit.
          </p>
          <div className="detail-actions">
            <button>Watch</button>
            <button>Trailer</button>
          </div>
        </div>
      </div>
      <h2 className="head">CAST</h2>
      <div className="cast">
        <div className="member">
          <img
            src="https://media.newyorker.com/photos/5cf5728d47f7cc877a506d9b/1:1/w_1765,h_1765,c_limit/Fry-KeanuReeves-2.jpg"
            alt="name"
          />
          <h3>Name </h3>
          <h4>Character</h4>
        </div>
      </div>
      <div className="movie-cut">
        <h2 className="head">Trailer</h2>
        <div className="detail-trailer">
          <iframe
            id="frame"
            src="https://www.youtube.com/embed/XXYlFuWEuKI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="detail-review">
          <h2 className="head">Review</h2>
          <div className="comment-section">
            <blockquote>
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              in pariatur ducimus porro optio saepe asperiores temporibus eius
              tempore maxime vitae, nobis quae reprehenderit dolores magni
              suscipit mollitia ad impedit. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Ab aliquid enim quia, consequuntur
              ad illo minus fugiat eveniet tempore eum laudantium natus laborum
              quas similique maiores, tenetur reiciendis qui fuga earum a
              eligendi autem quibusdam, ducimus deleniti? Recusandae amet qui
              reiciendis et ipsam aliquid d„
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
