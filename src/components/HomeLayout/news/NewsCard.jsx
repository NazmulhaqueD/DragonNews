import { FaEye, FaStar } from "react-icons/fa";
import { NavLink } from "react-router";

const NewsCard = ({ news }) => {
  if (!news) return null;

  const {
    id,
    title,
    author,
    thumbnail_url,
    details,
    total_view,
    rating,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md mb-6">
      <div className="flex items-center gap-4 p-4">
        <img src={author?.img} alt={author?.name} className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-semibold">{author?.name}</p>
          <p className="text-sm text-gray-500">
            {new Date(news.author?.published_date).toDateString()}
          </p>
        </div>
      </div>

      <div className="px-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <img src={thumbnail_url} alt="news" className="w-full h-56 lg:h-80 object-cover rounded" />
        <p className="text-sm text-gray-700 mt-4">
          {details.length > 250 ? details.slice(0, 250) + "..." : details}
        </p>
        <NavLink to={`/news-details/${id}`} className="text-orange-500 font-semibold hover:underline cursor-pointer mt-2">Read More</NavLink>
      </div>

      <div className="flex justify-between items-center text-sm px-4 py-3 border-t mt-4">
        <div className="flex items-center text-orange-400 gap-1">
          <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          <span className="ml-2 text-gray-700">{rating?.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <FaEye /> {total_view}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
