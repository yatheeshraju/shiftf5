import "./App.css";
import Nav from "./compoenents/Nav/Nav";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TimeZones from "./containers/TimeZones/TimeZones";
import JsonFormatter from "./containers/JsonFormatter/JsonFormatter";
import Base64 from "./containers/Base64/Base64";
import JwtDecode from "./containers/JwtDecode/JwtDecode";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UrlEncodeDecode from "./containers/UrlEncodeDecode/UrlEncodeDecode";
import ColorPicker from "./containers/ColorPicker/ColorPicker";
import Timer from "./containers/Timer/Timer";
import Dashboard from "./containers/Dashboard/Dashboard";
import Compare from "./containers/Compare/Compare";
import Notepad from "./containers/Notepad/Notepad";
import CodeSearch from "./containers/CodeSearch/CodeSearch";
import IpAddress from "./containers/IpAddress/IpAddress";
import TermsAndConditions from "./containers/TermsAndConditions/TermsAndConditions";
import Footer from "./compoenents/Footer/Footer";
import Base64Image from "./containers/Base64Image/Base64Image";
import ImageBase64 from "./containers/ImageBase64/ImageBase64";

function App() {
  return (
    <div className="flex flex-col  w-full h-screen">
      <div>
        <Nav />
        <ToastContainer position="top-center" className="w-1/2" />
      </div>
      <div className="mt-4 min-h-5/6">
        <Router>
          <AuthenticatedTemplate>
            <div className="flex flex-col gap-2 md:flex-row  justify-center ">
              {/* <div className=" bg-white w-full shadow  shadow-slate-300 border-slate-300 md:w-1/6">
                <ToolsList />
              </div> */}
              <div className="w-full mt-10">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route
                    path="/termsandconditions"
                    element={<TermsAndConditions />}
                  />
                  <Route path="/timezones" element={<TimeZones />} />
                  <Route path="/json_formatter" element={<JsonFormatter />} />
                  <Route path="/base64_encode_decode" element={<Base64 />} />
                  <Route path="/compare" element={<Compare />} />
                  <Route path="/notepad" element={<Notepad />} />
                  <Route
                    path="/url_encode_decode"
                    element={<UrlEncodeDecode />}
                  />
                  <Route path="/jwt_decode" element={<JwtDecode />} />
                  <Route path="/color_picker" element={<ColorPicker />} />
                  <Route path="/focus_timer" element={<Timer />} />
                  <Route path="/search" element={<CodeSearch />} />
                  <Route path="/ip_address" element={<IpAddress />} />
                </Routes>
              </div>
            </div>
          </AuthenticatedTemplate>
          <UnauthenticatedTemplate>
            <div className="flex flex-col gap-2 md:flex-row  justify-center ">
              {/* <div className=" bg-white w-full shadow  shadow-slate-300 border-slate-300 md:w-1/6">
                <ToolsList />
              </div> */}
              <div className=" w-full mt-10">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route
                    path="/termsandconditions"
                    element={<TermsAndConditions />}
                  />
                  <Route path="/timezones" element={<TimeZones />} />
                  <Route path="/json_formatter" element={<JsonFormatter />} />
                  <Route path="/base64_encode_decode" element={<Base64 />} />
                  <Route
                    path="/url_encode_decode"
                    element={<UrlEncodeDecode />}
                  />
                  <Route path="/compare" element={<Compare />} />
                  <Route path="/notepad" element={<Notepad />} />
                  <Route path="/jwt_decode" element={<JwtDecode />} />
                  <Route path="/color_picker" element={<ColorPicker />} />
                  <Route path="/focus_timer" element={<Timer />} />
                  <Route path="/search" element={<CodeSearch />} />
                  <Route path="/ip_address" element={<IpAddress />} />
                  <Route path="/base64_image" element={<Base64Image />} />
                  <Route path="/image_base64" element={<ImageBase64 />} />
                </Routes>
              </div>
              <div></div>
            </div>
          </UnauthenticatedTemplate>
        </Router>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
