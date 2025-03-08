import { useState } from "react";
import { useAddNewFilmMutation } from "../features/films/filmDetailsSlice";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input
} from '@chakra-ui/react'


const AddContentPanel = () => {
  const [formData, setFormData] = useState({
    title: 'Test Title',
    description: 'test description',
    technicalDetails: 'test details',
    filmUrl: "",
    imageUrls: []
  });

  const [addNewFilm, { isLoading }] = useAddNewFilmMutation()

  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");
  const [selectedVideo, setSelectedVideo] = useState("");
  const [isError, setIsError] = useState(false)

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file.type.startsWith('video/')) {
      setSelectedVideo(file);
      setIsError(false)
    } else {
      setIsError(true);
      setSelectedVideo(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const uploadVideo = async () => {
    try {
      const response = await axios.put(import.meta.env.BUNNY_STORAGEZONE_URL, selectedVideo, {
        headers: {
          AccessKey: import.meta.env.BUNNY_API_KEY,
          'Content-Type': 'application/octet-stream',
        }
      })
      console.log("vid upload response", response)
    } catch (err) {
      console.log("video upload error: ", err)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addNewFilm(formData).unwrap()
    } catch (err) {
      console.log(err)
    }
    uploadVideo()
  };





  return (
    <form action="">
      <FormControl isRequired>
        <FormLabel>Film Title</FormLabel>
        <Input type='text' onChange={handleChange} name='title' />
      </FormControl>
      <FormControl >
        <FormLabel>Description</FormLabel>
        <Input type='text' onChange={handleChange} name='description' />
      </FormControl>
      <FormControl >
        <FormLabel>Technical Details</FormLabel>
        <Input type='text' onChange={handleChange} name='technicalDetails' />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Upload Video File</FormLabel>
        <Input type='file' onChange={handleVideoChange} name='filmUrl' />
        {isError ?
          <p>File must be of video format</p> : ""
        }
      </FormControl>
      <FormControl >
        <FormLabel>Images</FormLabel>
        <Input multiple type='file' onChange={handleChange} name="imageUrls" />
      </FormControl>
      <Button onClick={handleSubmit} >Post to Website</Button>
    </form>
  );
};



export default AddContentPanel