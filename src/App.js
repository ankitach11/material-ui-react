import React, { useState } from "react";
import "./App.css";
import {
  Slider,
  ButtonGroup,
  Button,
  Checkbox,
  Radio,
  Select,
  Menu,
  MenuItem,
  TextField,
  Switch,
  Box,
  Container,
  Grid,
  Hidden,
  Tab,
  Tabs,
  AppBar,
} from "@mui/material";
import { Delete, Favorite, FavoriteBorder, Male } from "@mui/icons-material";
import { Link, Route, BrowserRouter as Router ,Routes} from "react-router-dom";

// function App() {
//   const [color , setColor] = useState("primary")
//   const [disable, setdisable] = useState(false)
//   const [name , setname] = useState([])
//   const [gender, setgender] = useState("female")
//   const [val, setval] = useState([40,80])
//   const [course, setcourse] = useState("")
//   const [value,settab] = useState(0)
//   function custom(){
//     // alert("button has been clicked")
//     setColor("secondary")
//     // setdisable(true)
//   }
//   function getvalue(e){
//     let data = name;
//     data.push(e.target.value)
//     console.warn(data)
//   }
//   const testfunction=(e) => {
//     setgender(e.target.value)
//     console.warn(e.target.value)
//   }
//   const mark = [
//     {
//       value:0,
//       label:"start"
//     },
//     {
//       value:30,
//       label:"start2"
//     },
//     {
//       value:60,
//       label:"start3"
//     },
//     {
//       value:90,
//       label:"start4"
//     }
//   ]
//   const getval = (event, value) => {
//     console.warn(value);
//   }
//   const updateval=(e,val) =>{
//     setval(val)
//   }
//   const updateCourse=(e,val) =>{
//     console.warn(e.target.value)
//    setcourse(e.target.value)
//   }
//   const getdata = (e) => {
//     console.warn(e.target.value)
//   }
//   const getswitchvalue = (e,val) => {
//     console.warn(val)
//   }
//   const handleTabs = (e,val) => {
//     console.warn(val);
//     settab(val);
//   }

//   return (
//     <div className="App">
//      <div>
//      <h1> React MUI</h1>
//      </div>
//      <div>
//       <Button
//       color={color}
//       variant="outlined"
//       disabled={disable}
//       size="large"
//       endIcon={<Delete />}
//       onClick={() => {custom()}}
//       >Click Me</Button>
//       <br />
//      <ButtonGroup
//      orientation="vertical"
//      color="primary"
//      variant="contained"
//      >
//       <Button>One</Button>
//       <Button>Two</Button>
//       <Button>Three</Button>
//      </ButtonGroup>
//      <br/>
//      <Checkbox color="primary" value="ankita" onChange={(e) => {getvalue(e)}} />
//      <Checkbox color="primary" value="aditi" onChange={(e) => {getvalue(e)}} />
//      <Checkbox color="primary" value="adinkta" onChange={(e) => {getvalue(e)}} />
//      <Checkbox color="primary" value="xyz" indeterminate onChange={(e) => {getvalue(e)}} />
//      <Checkbox color="primary" value="favourite" icon={<FavoriteBorder/>} onChange={(e) => {getvalue(e)}} />
//      <Checkbox color="primary" value="one" icon = {<FavoriteBorder/>} checkedIcon={<Favorite/>} onChange={(e) => {getvalue(e)}} />
//      <br/>
//      <div>
//       <span>Male</span>
//       <Radio color="secondary" checked={gender=="Male"} onChange={testfunction} value="Male"/>
//      </div>
//      <div>
//       <span>Female</span>
//       <Radio value="Female" checked={gender=="Female"} onChange={testfunction}/>
//      </div>
//      <div>
//       <span>Other</span>
//       <Radio color="default" value="Other" checked={gender=="Other"} onChange={testfunction}/>
//      </div>
//      </div>
//      <div style={{width:300 , margin:50}}>
//       <Slider
//       color="primary"
//       defaultValue={100}
//       step={10}
//       max={200}
//       marks={mark}
//       valueLabelDisplay="auto"
//       onChange={getval}
//       // orientation="vertical"
//       />
//      </div>
//      <div style={{width:300 , margin:50}}>
//       <Slider
//      value={val}
//      max={200}
//      onChange={updateval}
//       />
//      </div>
//      <div>
//       <Select  displayEmpty value={course} onChange={updateCourse}>
//       <MenuItem value="">Select Course</MenuItem>
//         <MenuItem value={1}>Node</MenuItem>
//         <MenuItem value={2}>PHP</MenuItem>
//         <MenuItem value={3}>Java</MenuItem>
//         <MenuItem value={4}>Express</MenuItem>
//         <MenuItem value={5}>C++</MenuItem>
//       </Select>
//      </div>
//      <div>
//       <TextField
//       label="enter name"
//       color="secondary"
//       variant="outlined"
//       // type="number"
//       onChange={getdata}
//       />
//      </div>
//      <div>
//        <Switch
//        color="primary"
//        size="large"
//        onChange={getswitchvalue}
//        />
//      </div>
//      <Box  component="span" sx={{ p: 2, border: '1px dashed red' }} mt={50}   >
//       <Button>Box</Button>
//      </Box>
//      <div>
//      <Container
//      maxWidth="xs"
//      style={{backgroundColor:'skyblue'}}>
//       <h1 > This is a Container</h1>
//      </Container>
//      <Container
//      maxWidth="sm"
//      style={{backgroundColor:'skyblue'}}>
//       <h1 > This is a Container</h1>
//      </Container>
//      <Container
//      maxWidth="md"
//      style={{backgroundColor:'skyblue'}}>
//       <h1 > This is a Container</h1>
//      </Container>
//      <Container
//      maxWidth="lg"
//      style={{backgroundColor:'skyblue'}}>
//       <h1 > This is a Container</h1>
//      </Container>
//      <Container
//      fixed
//      style={{backgroundColor:'skyblue'}}>
//       <h1 > This is a Container</h1>
//      </Container>
//      </div>
//      <Grid item xs={12} container spacing={2}>
//       <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:'red'}}>Block 1</h1></Grid>
//       <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:'red'}}>Block 2</h1></Grid>
//       <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:'red'}}>Block 3</h1></Grid>
//       <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:'red'}}>Block 4</h1></Grid>
//      </Grid>
//      <Grid item xs={12} container spacing={2}>
//       <Grid item  lg={3} xs={12} sm={6}><h1 style={{backgroundColor:'green'}}>Hidden 1</h1></Grid>
//       <Grid item xs={12} lg={3} sm={6}><h1 style={{backgroundColor:'green'}}>Hidden 2</h1></Grid>
//       <Hidden only={['sm','md']} ><h1 style={{backgroundColor:'green' , flex:1}}>Hidden 3</h1></Hidden>
//       <Grid item xs={12} lg={3} sm={6}><h1 style={{backgroundColor:'green'}}>Hidden 4</h1></Grid>
//      </Grid>
//      <AppBar position="static" style={{backgroundColor:'whitesmoke'}}>
//       <Tabs value={value} onChange={handleTabs}>
//         <Tab label="Item 1" />
//         <Tab label="Item 2" />
//         <Tab label="Item 3" />
//       </Tabs>
//       <TabPanel value={value} index={0}>
//         Item One Details
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Item Two Details
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Item Three Details
//       </TabPanel>
//      </AppBar>
//     </div>
//   );
// }

function App() {
  const [anchor, setanchor] = useState(null)
  const openMenu=(event) =>{
     setanchor(event.currentTarget)
  }
  const closeMenu=(event) =>{
    setanchor(null)
  }
  return (
    <Router>
      <h1> React Material UI | Menu</h1>
      <Button onClick={openMenu}>Menu</Button>
      <Menu 
      open={anchor}
      onClose={closeMenu}
      >
        <MenuItem onClick={closeMenu}> <Link to="/" > Home</Link></MenuItem>
        <MenuItem onClick={closeMenu}> <Link to="/about" > About</Link></MenuItem>
      </Menu>
     
     
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <h1>{children}</h1>}</div>;
}

function Home() {
  return (
    <h1> Home Page</h1>
  )
}

function About() {
  return (
    <h1> About Page</h1>
  )
}
export default App;
