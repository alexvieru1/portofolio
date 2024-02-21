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
import { CheckCircleIcon } from "@heroicons/react/20/solid";
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
      await sendContactForm(state);
      setState(initValues);
      setTouched(initVals);
      setSendSuccess(true);
    } catch (error) {}
  };

  return (
    <div>
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
          <h1 className="text-lg font-bold text-green-700">
            Fantastic! Your email has been sent successfully!
          </h1>
          <h1 className="text-md ">
            I'm working hard to reply to you as quickly as possible!{" "}
          </h1>
          <h1 className="text-md ">
            While you wait, why not take a peek at my social media accounts for
            more updates and interesting content?
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
              <FormLabel>Name</FormLabel>
              <Input
                padding="3px"
                rounded="4px"
                bgColor="black"
                border="1px"
                borderStyle="inherit"
                borderColor="#6366f1"
                type="text"
                name="name"
                errorBorderColor="red.300"
                value={state.name}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>Name field is required</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={touched.email && !state.email}
              mb="1rem"
            >
              <FormLabel>Email</FormLabel>
              <Input
                padding="3px"
                rounded="4px"
                bgColor="black"
                border="1px"
                borderStyle="inherit"
                borderColor="#6366f1"
                type="email"
                name="email"
                errorBorderColor="red.300"
                value={state.email}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>Email field is required</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={touched.subject && !state.subject}
              mb="1rem"
            >
              <FormLabel>Subject</FormLabel>
              <Input
                padding="3px"
                rounded="4px"
                bgColor="black"
                border="1px"
                borderStyle="inherit"
                borderColor="#6366f1"
                type="text"
                name="subject"
                errorBorderColor="red.300"
                value={state.subject}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>Subject field is required</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={touched.message && !state.message}
              mb="1rem"
            >
              <FormLabel>Message</FormLabel>
              <Textarea
                minW="230px"
                minH="150px"
                padding="3px"
                rounded="4px"
                bgColor="black"
                border="1px"
                borderStyle="inherit"
                borderColor="#6366f1"
                name="message"
                errorBorderColor="red.300"
                value={state.message}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>Message field is required</FormErrorMessage>
            </FormControl>
            <button
              disabled={
                !state.name || !state.email || !state.subject || !state.message
              }
              onClick={onSubmit}
              className="w-full relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Submit
              </span>
            </button>
          </Container>
        </motion.div>
      )}
    </div>
  );
};

export default ContactForm;
