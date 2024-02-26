/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import {
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { sendContactForm } from "@/lib/api";
import {
  ArrowPathIcon,
  CheckCircleIcon,
  EnvelopeIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type TouchedValues = {
  name: boolean;
  email: boolean;
  subject: boolean;
  message: boolean;
};

const initValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const initVals: TouchedValues = {
  name: false,
  email: false,
  subject: false,
  message: false,
};

const ContactForm = () => {
  const [sendSuccess, setSendSuccess] = useState(false);
  const [buttonIsLoading, setButtonIsLoading] = useState(false);
  const [state, setState] = useState<FormValues>(initValues);
  const [touched, setTouched] = useState<TouchedValues>(initVals);

  const onBlur = ({
    target,
  }: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched((prev) => ({
      ...prev,
      [target.name]: true,
    }));
  };

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setState((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const onSubmit = async () => {
    try {
      setButtonIsLoading(true);
      await sendContactForm(state);
      setState(initValues);
      setTouched(initVals);
      setSendSuccess(true);
    } catch (error) {}
  };

  return (
    <div className="text-white">
      {sendSuccess ? (
        <motion.div
          className="flex flex-col justify-center items-center text-center p-10"
          key="success"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 1,
            },
          }}
          viewport={{ once: false }}
        >
          <CheckCircleIcon className="h-10 w-10 text-green-700 mb-4" />
          <h1 className=" text-lg font-bold text-green-700">
            Fantastic! Your email has been sent successfully!
          </h1>
          <h1 className="text-white text-md ">
            I'm working hard to reply to you as quickly as possible!{" "}
          </h1>
          <h1 className="text-md text-white">
            During the interim, feel free to browse through my GitHub and
            LinkedIn profiles for additional updates and engaging content.
          </h1>
        </motion.div>
      ) : (
        <motion.div
          key="form"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 1,
            },
          }}
          viewport={{ once: false }}
        >
          <Container>
            <FormControl
              isRequired
              isInvalid={touched.name && !state.name}
              mb="1rem"
            >
              <FormLabel color="white">Name</FormLabel>
              <Input
                padding="3px"
                rounded="4px"
                bgColor="black"
                border="1px"
                borderStyle="inherit"
                borderColor="#0099ff"
                type="text"
                name="name"
                errorBorderColor="red"
                value={state.name}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage color="red">
                Name field is required
              </FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={touched.email && !state.email}
              mb="1rem"
            >
              <FormLabel color="white">Email</FormLabel>
              <Input
                padding="3px"
                rounded="4px"
                bgColor="black"
                border="1px"
                borderStyle="inherit"
                borderColor="#0099ff"
                type="email"
                name="email"
                errorBorderColor="red"
                value={state.email}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage color="red">
                Email field is required
              </FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={touched.subject && !state.subject}
              mb="1rem"
            >
              <FormLabel color="white">Subject</FormLabel>
              <Input
                padding="3px"
                rounded="4px"
                bgColor="black"
                border="1px"
                borderStyle="inherit"
                borderColor="#0099ff"
                type="text"
                name="subject"
                errorBorderColor="red"
                value={state.subject}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage color="red">
                Subject field is required
              </FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={touched.message && !state.message}
              mb="1rem"
            >
              <FormLabel color="white">Message</FormLabel>
              <Textarea
                minW="230px"
                minH="150px"
                padding="3px"
                rounded="4px"
                bgColor="black"
                border="1px"
                borderStyle="inherit"
                borderColor="#0099ff"
                name="message"
                errorBorderColor="red"
                value={state.message}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage color="red">
                Message field is required
              </FormErrorMessage>
            </FormControl>
            <button
              disabled={
                !state.name ||
                !state.email ||
                !state.subject ||
                !state.message ||
                buttonIsLoading
              }
              onClick={onSubmit}
              className="w-full relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                {buttonIsLoading ? (
                  <div>
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="#1C64F2"
                      />
                    </svg>
                    Sending...
                  </div>
                ) : (
                  <>
                    Send Email
                    <PaperAirplaneIcon className="text-white ml-2 w-5 h-5" />
                  </>
                )}
              </span>
            </button>
          </Container>
        </motion.div>
      )}
    </div>
  );
};

export default ContactForm;
