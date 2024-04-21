import { useState } from "react";
import {
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Dropdown,
  Container,
} from "react-bootstrap";

import NewsList from "./components/NewsList";

function App() {
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [language, setLanguage] = useState(""); 
  const [navbar, setNavbar] = useState(false);
  const [sortBy, setSortBy] = useState("publishedAt");
  const [datePublished, setDatePublished] = useState("");


  const handleCategoryClick = (cetegory) => {
    setCategory(cetegory);
    setSearchTerm("");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setCategory("");
    setSearchTerm(event.target.search.value);
  };
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="/" className="fw-bold fs-4">
  <div className='container flexSB paddingTB'>
    <div className='logo'>
      <img src='../images/logo.png' alt='' />
    </div>
  </div>
</Navbar.Brand>


          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Dropdown>
                <Dropdown.Toggle variant="outline-primary">
                  Categories
                </Dropdown.Toggle>
                <Dropdown.Menu className="nav-dropdown-menu">
                  <Dropdown.Item onClick={() => handleCategoryClick("general")}>
                  General
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleCategoryClick("business")}
                  >
                    Business
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleCategoryClick("sports")}
                  >
                    Sports
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleCategoryClick("science")}
                  >
                    Science
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleCategoryClick("technology")}
                  >
                    Technology
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCategoryClick("health")}>
                    Health
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleCategoryClick("entertainment")}
                  >
                    Entertainment
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
            <div className="language-button">
  <Form.Select className="language-select" onChange={handleLanguageChange} value={language}>
    <option value="">Select Language</option>
    <option value="ar">Arabic</option>
    <option value="de">German</option>
    <option value="en">English</option>
    <option value="es">Spanish</option>
    <option value="fr">French</option>
    <option value="he">Hebrew</option>
    <option value="it">Italian</option>
    <option value="nl">Dutch</option>
    <option value="no">Norwegian</option>
    <option value="pt">Portuguese</option>
    <option value="ru">Russian</option>
    <option value="sv">Swedish</option>
    <option value="tr">Turkish</option>
    <option value="zh">Chinese (Mandarin)</option>
  </Form.Select>
</div>

<div className="sort-by">
  <Form.Select onChange={handleSortChange} value={sortBy}>
    <option value="publishedAt">Date Published</option>
    <option value="relevancy">Relevancy</option>
    <option value="popularity">Popularity</option>
  </Form.Select>
</div>

{/* Date published */}
<Form className="d-flex">
  <FormControl
    type="date"
    placeholder="Date Published"
    className="me-2 date-published"
    value={datePublished}
    onChange={(e) => setDatePublished(e.target.value)}
  />
</Form>

            
            <Form onSubmit={handleSearch} className="d-flex">
              <FormControl
                type="text"
                placeholder="Search"
                className="me-2"
                name="search"
              />

              <Button variant="outline-primary" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <h5>Categories</h5>
            <Nav className="flex-column">
              <Nav.Link onClick={() => handleCategoryClick("general")}>
                General
              </Nav.Link>
              <Nav.Link onClick={() => handleCategoryClick("business")}>
                Business
              </Nav.Link>
              
              <Nav.Link onClick={() => handleCategoryClick("sports")}>
                Sports
              </Nav.Link>
              <Nav.Link onClick={() => handleCategoryClick("science")}>
                Science
              </Nav.Link>
              <Nav.Link onClick={() => handleCategoryClick("technology")}>
                Technology
              </Nav.Link>
              <Nav.Link onClick={() => handleCategoryClick("health")}>
                Health
              </Nav.Link>
              <Nav.Link onClick={() => handleCategoryClick("entertainment")}>
                Entertainment
              </Nav.Link>
            </Nav>
          </Col>

          <Col xs={12} md={9}>
            <NewsList category={category} searchTerm={searchTerm} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;