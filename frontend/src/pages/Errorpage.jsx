import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
import Header from "../components/Header";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  return (
    <div>
      <Helmet>
        <title>RAM IT BD - Error Page</title>
        <meta
          name="description"
          content="This is a dynamic description for SEO"
        />
      </Helmet>

      <Header></Header>
      <div className="flex flex-col items-center justify-center h-[70vh] text-center bg-gray-100 p-6">
        <AlertTriangle size={80} className="text-red-500 mb-4" />
        <h1 className="text-4xl font-bold text-gray-800">
          Oops! Something went wrong.
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          The page you are looking for might be missing or an error occurred.
        </p>
        <Link
          to="/"
          className="mt-6 px-4 py-2 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
