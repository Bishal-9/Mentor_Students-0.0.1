import { useRef, useState } from "react"
import {
  Alert,
  Box,
  CircularProgress,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material"
import axios from "axios"

import SearchRoundedIcon from "@mui/icons-material/SearchRounded"

function App() {
  const search = useRef()
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState([])
  const [error, setError] = useState(undefined)

  const fetchResults = async () => {
    setLoading(true)
    setResult([])
    axios
      .get(`http://localhost:5000/api/ads/${search.current.value}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setResult(response.data.data)
      })
      .catch((error) => {
        console.log("Error: ", error.message)
        setError(error.message)
      })
      .finally(() => setLoading(false))
  }

  const errorClose = () => {
    setError(undefined)
  }

  return (
    <>
      {/* Error Alert */}
      {error && (
        <Snackbar
          open={Boolean(error)}
          autoHideDuration={5000}
          onClose={errorClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <Alert severity="error" onClose={errorClose}>
            {error}
          </Alert>
        </Snackbar>
      )}
      {/* Main Component */}
      <Box
        margin="100px 0"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography gutterBottom variant="h3">
          Search
        </Typography>

        {/* Search Bar */}
        <Box
          paddingLeft="20px"
          border="1px solid lightgray"
          borderRadius="50px"
          backgroundColor="#d3d3d3"
        >
          <input
            ref={search}
            type="text"
            style={{
              border: "none",
              outline: "none",
              borderRadius: "50px",
              backgroundColor: "transparent",
            }}
          />
          <IconButton onClick={fetchResults}>
            <SearchRoundedIcon />
          </IconButton>
        </Box>

        {/* Ad */}
        {loading ? (
          <CircularProgress />
        ) : (
          <Box paddingTop="30px">
            {result.length > 0 ? (
              <img src={result[0].imageUrl} alt="" />
            ) : (
              <Typography>No Results Found</Typography>
            )}
          </Box>
        )}
      </Box>
    </>
  )
}

export default App
