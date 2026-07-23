import { useContext } from "react";
import { InterviewContext } from "../Interview.context.js";

const useInterview = () => useContext(InterviewContext);

export default useInterview;