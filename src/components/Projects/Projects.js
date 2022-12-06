import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import { MyCarousal } from "../my-carousal/my-carousel";

import suicide from "../../Assets/Projects/suicide.png";

import Type from "../Home/Type";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <Row
          style={{
            justifyContent: "center",
            marginTop: "-250",
          }}
        >
          <Col md={4} className="project-card">
            <Container>
              <img
                src="https://avatars.githubusercontent.com/u/107460416?v=4"
                alt="abc"
                width="280"
                height="280"
                borderRadius="50%"
              />
            </Container>
          </Col>

          <Col md={8}>
            <div style={{ color: "white", marginTop: "20px", padding: "30px" }}>
              <h3 style={{ textAlign: "left" }}>Hi there! I am</h3>
              <h2>
                <center>POOJA YADAV</center>
              </h2>
              <div style={{ textAlign: "left" }}>
                <p>
                  {" "}
                  <ul>
                    <li>
                      I am currently learning full stack web development at
                      Masai School. I am passionate about solving real-world
                      problems and actively looking for opportunities in the
                      field of web development and software engineering
                    </li>
                  </ul>
                </p>
                <p>
                  {" "}
                  <ul>
                    <li>
                      I was always interested in web development but did not
                      have correct guidance but when i got to know about Masai
                      School I was overwhelmed and immediately took admission.
                    </li>
                  </ul>
                </p>
                <p>
                  {" "}
                  <ul>
                    <li>
                      I'm a passionate Developer, with strong administrative and
                      communication skills, good attention to detail and the
                      ability to write efficient code using MERN Stack.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div></div>
          </Col>

          <Col md={4} className="project-card">
            <h1 style={{ paddingTop: 20 }} className="heading">
              Hi There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <h1 className="heading-name">
              I'M
              <strong className="main-name"> Pooja Yadav</strong>
            </h1>

            <div style={{ padding: 50, textAlign: "left" }}>
              <Type />
            </div>
          </Col>

          <Col md={8} className="project-card">
            <MyCarousal />
          </Col>
          <Col md={14} className="project-card">
            <div class="container" style={{ color: "white" }}>
              <div class="row">
                <div class="col-sm">
                  <h1>Skills</h1>
                </div>
              </div>
            </div>
          </Col>

          <Col md={4} className="project-card">
            <h1 style={{ backgroundColour: "blue", color: "white" }}>
              Technical Skills
            </h1>
            <br />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXv9VRWT1ZTy9IYJNQMc-5uyRSs9yBYyszFrbqD88&s"
              alt="1"
              height="100"
            />{" "}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3kHKwjoL7t15aWpg2uXCZ9ZQAcm2z0T0p2Rf62-Bn&s"
              alt="1"
              width="100"
              height="100"
            />{" "}
            <img
              src="data:image/jpeg;base64,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"
              alt="1"
              width="100"
              height="100"
            />{" "}
            <br />
            <br />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZwHDkmuqLEumfwEbluLo9DnWvG76Y2qdbaYliM-1kOQ&s"
              alt="1"
              width="100"
              height="100"
            />{" "}
            <img
              src="https://t3.ftcdn.net/jpg/03/86/45/96/240_F_386459614_7JRoaj5LBSbum74i1LXf3oaoMnxQwJdu.jpg"
              alt="1"
              width="100"
              height="100"
            />{" "}
            <img
              src="data:image/png;base64,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"
              alt="1"
              width="100"
              height="100"
            />
            <br /> <br />
            <img
              src="data:image/png;base64,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"
              alt="1"
              width="100"
              height="100"
            />{" "}
            <img
              src="data:image/jpeg;base64,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"
              alt="1"
              width="100"
              height="100"
            />{" "}
            <img
              src="data:image/png;base64,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"
              alt="1"
              width="100"
              height="100"
            />
            <br /> <br />
          </Col>
          <Col md={4} className="project-card">
            <h1 style={{ color: "white" }}>
              <center>Soft Skills</center>
            </h1>
            <div
              style={{
                backgroundColour: "blue",
                color: "white",
                textAlign: "left",
                paddingLeft: "60px",
              }}
            >
              <br />
              <h5>
                <ul>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-up-right-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                    />
                  </svg>{" "}
                  Communication <br />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-up-right-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                    />
                  </svg>{" "}
                  Listening
                  <br />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-up-right-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                    />
                  </svg>{" "}
                  Creative
                  <br />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-up-right-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                    />
                  </svg>{" "}
                  Problem Solving
                  <br />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-up-right-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                    />
                  </svg>{" "}
                  Time-Management
                </ul>
              </h5>
            </div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABgFBMVEX///8AAAD50LTa5vFbXWBw1vn1yEz8ZX7t9Pxz3P//2Lve6vWiq7OH0Ud03v9y2f23t7eojXriuEb4+PhCf5M9dYhjvdxYqMQdN0A3aHkzYnJPl6/J1N6+yNG2lTjv7+/l5eXuwkqMjIwYFAgUFBQGDQ/IyMjb29utra1zc3OQkJA/QEKvucIwMDC/v78hISGdnZ29nonux6yCgoJPT0/UsZn8XHe7S15sbGxJSUkmJibT09M1NTV2YlVTRTwiQUxhUUaIkJeJN0XPU2fgu6KWfWxVV1qylIEsJSDKqZKt34aVnaUNGBz77Mb0xTv99+U9MhNrVyFVIivoXXQwJw8eDA8uEhfIUGQpTltuLDdAGiAzKiWGcGFIPDSehHL31HjP7LmP1FX535n2zmL65bP98db5358jHQuEbCnNpz+YfC9WRhun5ftpViHI7v19ZiemQlOmiDQWKjD9obD9tL/8c4n+6e39w8z+1dvw+eni9NWZ12a/5qKk3Hp8zjB6MT0B4ICxAAAV3klEQVR4nN2di1vbRtaHLWMuFgSbOEAaaKxQG2McY2NMAr4QkhgMaS5taZsb5LLd3WxvX9Pbbre7m/zrn+bMaDQjzUgjI8t2fs+z29iWzLw+M+fMHB2NYrFBKLuWqGhaubiRUTj4L31vTujKFjWqNf/DJx71v0nhqpnTGCX8zPjg4agZcVXj1fJBnJh4OFpGzGKuy/NLS1fuwz8PPY9/OTEx8U1EbQtHdQR1fzGVTCVnx+cBMe1x+F8eTiBEFY80JGoipPxCchyUXEIvy9Kj//YNAJp6EGEbz6cdhGQBjo/PfoRerwoPffRXymeOxWt/H43RmGmYQE9mLcDx1Dgi3BIe++jBywmb8OVfR4PQQEBLqXEb8QqKGLLDH70kVvzmb1G28jwqQCdlCJPz3gEDPM3DlxE28ZwKTAiIIwSICReTDOEVv4j4zcRITduy5oRb+8j2NOPjefONotcpDx7+ParWhaIdvpvOXkKvNzxPGSkTxjJAeHmcICYX0cuK94xlpEy42iCz0oVZc9aWTMGURqsOulnhacteUTxZWly89AteXAy6WaGpWdFEymUH3bCwtIKB8htpDrBkDLphIanZIkt602JG3QZcGaF1EafC2kpxa61AXxMDWkvBJs7UlKuj2kPTxGVqeZxoKpTxy0MGKGMYg2lcCDJ2mWHWMu24Tv6tkFcbCRW4VJrZMQlw3Rh0y0ISyTRpbz57w4F+KAaMxbDF/nHRXNZd/I7yHRqDbldo2gCgb0nu4eKbD82AsViJBTQRAbDgf97ICPIwP9kJpInvPjRC6KQXGUIw4ge0eIhVEdAEq8/Q1Cz8PzT9f+F/p5JQcP+EI/xek+VDzyOU6ZkK/VtVFJENf4AEQdjfqqRV3pWScRh6sMBJkIEYEXzpjwzhP/riS8GG42F/q5pg6XeVAn4Li9zQ/8oUAhyQr8FXeK+ygJpWDH0ZOPXDD4NxNKYSwPT5t9dMvp+saWnO6yLoqClD8k2fvPmEXVokRnU1L1C2wZJpFau05AOafeO8tr1sstLAH9AKKrZ6SPh24YpExsoEs/PTQrNpDKZ14SizsVZdS9Ox1yRmtJKjGzifmNuKdNWRMVbT3tpoZnvOblrZqPWYzYu0E5kHahZ5ByFRuedfvVAiZmyu8Z4oGjMahwIaiXZ6tWNV8oVGiCAypSV/W6Jmj3+GTaTeeXxy9+YX2Iqhsgi1JiGRSlzhoyDLjF+cTIJuwqv1MGFEIsWCP1696Kufv8fH9jx28EWZLyYt3UUv+319LQs56i/ZRZ2H8FxaXonmJ5i2nlDCybfodZ9nrRCOv1fjQ0vaL9HxvU7B4Oe8M8noK82nFuPcyqAGv7mmTIhX7b16B6inecwSvjffqIdK5BT40av+YLa+O4c/LTg66eTkHc2jJmo1rVTrbiu7kXa5QTT1/zII4MS1c/g/MWFJjLER1NNmYB1Tcfz66OLlT24ML4+K0mfepctSQR7nJkv4VJPVJlpBrKIanGhY5xFR1dXPDryrn3/mGxMb9a0ewmKmzAWLyckT9F3CfKph/y2lLIiRsNvG9Qn3MPyZv/DnRRncpRYdruapdFCzq0wF373OHs4laJ2E175X5UPaDRqsYSDaIxHCoTAXB4PwGT7A/w8ZJHdyfxFKATVDTnhR2YBYOUP8J6XCpnmLu+h7eCEq3MvAPOSuecxT/Ie4iJI1DI44QxZG8+NJXBy/KyW8RtJHt+YveWpp6dIVfGQ+oBUz+LSvn965gyfe4ngP85D38Ds8/hoOsyc+zYSJn08wPwzuoregQj55C/2b6dY8Ie6iTxaSs0lPpcz/kbsl2J9LRQVHLxCGe3wQG1HoD5Ghd03ZbgAWLUtJSPanFuBD+4fnCK/Ch0uzTJmyh2ahdjLwDM5osYDiGRssl29y/giHFGOLPVlbxyCok85bdblJqFndERN+hgGV+Gh5aDnokjhj+72WuHgWQqFjBYLCYpNzsKCtQiwDgTBv1+VCzSONZSwhLBxuKQOaVpznvktZ2XSxlcvVVyRzP1yxYk99nmGYctnC2js+PrV/JeJmrlAj4rpcESFcKFpQ66JE8DMGJvQRWMpegbzVHDrS43G9duAoTdIWrZbPghe0pnss4efmv38JwodL7YP6Gj9BKPyan/ZwOjUJTcb43HPu7ftWq/CdONY6nSVEw/AKvVUg5SFKiEZ1LtwKSpjZoVDITnv225hiH4WzNhAixs09wnyG/t92NhAU6y5CCIaUMLmwKJdVio4rtcMlBD/0lALiXE5Nr3UPDuZqOiAdE0RTnbmDg82a3tG4EZaCoJj2JEw+cXUOQZ/vA6FjXgdJAK2LkHQ0/F7Ax+0aRdR1+Aw8z2XLPCQoZjwIySFSEY/bB0IIhW+59aN2Frd1hBuwqcd5wftLtAeCly+eg/BJsk+EjlCI3cw2Q7JNWtDhAfVNeNd2gnAL7qqckIQ6mazwGjqhMBSesvbSt7EHPXUYUd9H7zqCYsuDcHx2fEGuVL88jSgUHjn6YxyPxU3HuzV41w6K4EjWPQg9wwU9JGRCyE47Q+GxkxA7VG2/w5kROyEaz8k4M7wIFRQ2ISwS7BQADoVOnxKPH5PBcsC/Dd33Eh8UtzwIU17Lp/4QwuLRDoWPAaPmAozrcwTx6JjFx06ID4oVKWFq/NK8XIv9GYdZ3oQQCufcJjQRO2Qyo7XZdyEo0qUDvvVPTviLxI1iLfUnWsB3W8HQFQo5xi6ZeD9nw0bObptpIvSixWYTuXi46AnYS8TPFFbTa9WVrWJxa30tvSG8foXXf89OxKGQR6yRqWqFmd9AUMybdKnZRbwnRRWmED+KxqE34ZUgNsyuVrdK7u+oFNecSR4rSXpHGAqdjCQy7tnH4KD4keknSBqpjFM+5MIM30sXb12W64q6pylU65pcu45bnwokxfHVY7wqdE3OeB3AQXY40fEbi0vk6+tZshj7WWDDlNdKWNWXZtYEtnPIkdFe5z/teiLiGEjjCQGkghQSzu5d7Es8zDhai5RDyvPv8RdfDN7m3lbU0YS7wvFSWZUscG39zcU+ELLFF7lGa3f38DBBVd8tNWgaomVwJ6a5/IQgHjqNSNzRNntag6aPMtDzP0ERg++lsx5S6KVN2j8rrTqDxqreslj4bFYWcoZFA75CMKdhBLGfDERwPDsGOOR1plEkRfvld1e5FfCCl6eZ9yWkBmxJ6Ih2CaMj7ZZpNrNkgwLt2MufzlEbYnOipFF2tcA3qckaVzFafOQdLTJkLOVLnnggYmvD9SW0aR79FMJDDh2gb8u/his0U4z4lz0jfpb4/JY/n6lDMKO4GhxS+M87UisC1plOAWW352RWaNPpphUOf+fQJa8VsIF/sYp3/2QQ4W8Jrw5gV5+TOlTIsXXpXNzj3v5stcQTphbmP5JryWvmjSt0FA2IEeEHETss3Kz9mnACDkMvp9OJuM+FMKjfe0LXHkkPV2odBAkfR/0Qzndqu+qAiQT0anHhkLW/25yAEOcQt8nURsv51mohH50PEg7Hx9ESbIf/lkRwwAScI9lMydqL4WzbaUY8Cz09Jqlvhc0L4OdaChDykwvu0Y3DRD0YYALZXVbfRgvHTx2EOL1mrRRVLp/gOwnG1S/NpC6jE7ifrtmLBc2wiM6SdjLq7HmPw7q+klo1Icwjb6kipmCjLkcnbQR0MkSH8oFot0zjsk/6KQOoehNnBtz2rQWVi8Apaw1msN8AfbQSGBDHRK9mFqwy5hcWIDMLDVAtThzX/AK4TJbT5VkXLuXdvx5O6KrGQVaIsL7m1dWskifscci1GFCgS7R2vXA+f8veOi45Pv9LnhU9jB/fMGNWmKm5RRxmw6O1tEZhf3O726YtCHr/JlcSTZfyC7IZDr+0AxPmegFM0PIFr67abLkaUA9er1xgv8WK/7fEfDnHL17t2YTUiD61Hc6C/95KeTeYmnpAlFyIKru+vtyzCZEVrbWip1W4DEDv96NkN9bWV4oUEc8+t1YYrVc3DNdpsNIMHilsHYIhpRtFYq0SczeK574ZBfeIJ+pZUQhavThSWxVfI8ZQ5tWUEUYemiCm8DUO/x6BmtdDLGQFfbAPOxTIRBBn1Qiz5/AzvBGjYCMiiGqEkHoNOuV2qqTSTcMURryvRAjH2m3dLTdaKjPw3RZ7nN8ENXzZSV1fwgQbK0jKIOfHaOXaaO8Gtx0FGZWF6F+CiKAapJ32DoINCRqWnQOrMGf2eCdAryLTCP/7Hsp2NKRVhN5m3GWT22X71PB3YfBWVSEMx8j6ucR2UWoesfupO7aKxOeiSWPvd471KKNaVVigQIoNWomXcvu1eOfMsqM7iJQsvrNOvAYJFzxZQL9OZTj3J7AJoY/u6fw6vNE6JFdmzP+27PEH10Bx/UjZIhzSHT8pIZgw3yEr8TPNVr7SaDQq7ErMSqB1qBGhhxuDhhGKEkIbX9B8yuaRJlOuy+d2SyNCiGyUY9Oax2dCvjM2c1ZDZ+dHgxA6aZsvyKrN7fOWzO3POWq22qSbjgAhrJ+7cYf0Wqd72m7v7+2326fdTk13JrC76LTd0SHsOAmBEpfzuuBA26NDCE30LhIR4mvMD2QMGkYoIKyQ8oMeCbVcozLkhJZ6JSQyBg0jlKGFRziUu2UWKiESVoxB47hlWfCovXcOwr22FTYNj781kF3OySZme9txvXsOwq4e38ZXPL12bfh1EIg4fYxqe3BVRI+EqCBYx1Xc8s0yMpO/RUhGhK/8wjzs3ITWhTPpxhS/3rjxzyjhQHClHU+kz09ISn13JH/rtxuTk79HjQi5YFJhFwIhKbIQjrY/fr8BReC/RTsW4fIsKRB0E0omoo4PWEJ8Q4Uoa/ovAnhj8tdIzYgyjkc1MaHeOWjPiWrv0AcvmCp0lrCGgoY4u/cHAEbtTtEwtOrJnYRgjiPBWsPxAUcIeRvJQPynCRiqM3308qHvc9127WHoIsSz1T0XYK3Cf8ATooEou7/4jxu/hwkYQxXgfk8CrcsJrVuUXP3U+sAyoptQurnS73+ECfgAHl7n81QpFO/PQiU884r5/woTUI0QZcVzYk+D7wrUnrt7qeMD3tP4FRCFKZVe2iRzSgEhKW113UPo+oCLh13PSU3IevTS/wmSMO9+LrShOUHZP9t3FU66P+BsiOopfR7HFrHgEtypZNamx2URPy6O+PhaQN+3UwwkXM/2IqSZN+S/g27t02/hYrF2TT83oXXX3dDtHY3reI8OOvFzrYDjnQM8E5CtLAYoqxrr6OgchEdWEqO/Wyn2KOap95oWGJCvae7vbpg9K81k2zxvOBOqZp9cGdpt+Jn7KaW370pFi5pLa0MVCJ3KpqtQJ+zc0iHujImugQqZi61qesiChFCoqQdOguODbY+X1g2ug266olC9yBlPCEHSvuQLOPxUFVYTUdfR9Kp1gauBNO9BHF8/xDGdvxG9NnwTNblW3QNRJ6X17e7m5hwunmFqGegw7Hmj8KiFGuu4e7fGbzyGDuB/gv0RGoYk9jtyTzVHPUab/7gzxHFeoKZ7mMXJXddEzptC8XopqiVvCCqJpjV6fBNKTnJHbdfd2eBnwt67r59KC0YiQOq1jqDQhIzCoZ2riQS1e1730fOAkHcbrSeQQ8DIqU6/IbM2LKHi369eKR0H5druRLdYMB0YkiXvn+/evXutMvXHpSdtlX6KZwPDkpb5z4ULF979V+VIvCm+1xZBFiAush2SPhp7bRJeuKd0aFUU2AXC87mheRhrAEJ8P6m2J9wMgRqwhisvor3BQqY/7927hwAvvL5377//VjiBJG48NgkiG1YOyXTtz3cXbL17rXIK2Xt7X7I1id4hq4zhsGDs3gVW716pnGPd07q/7cpa6PFtwjc0Y/B/PRDGVulNFS+243S2Zv6jc0BvxRgWLxp79Y4jVBmIprJ2FvX5/ovNzePj483NF3v2ajH8Z5T2rlevbcD//Kl8muxxa8PVQ6mCRAsi72eeDd31l14J284d4s3x1/6gCPXa8cEeg7d3cFzTh5IQuRtVJ0OEcos5HZd4bW92u93NbVzupSO7Dl/+8NX/7qk7mZixUqyiddRz4TZWyKEmqsUVo2+t7bvoI6aEqyidbk8yUukLVht02LnuEQJ1tRFHtAFl10vtA8QPYxlyMYCS/ZzZBOoIIuL9mErLFRkiAaws46uqQzM7VRW+/aI8NTUmsaJlwbGpKXxruzHoJgcT3t2zNT0lQ2QAp6ZhV6P6UF/b5pVN4+KaFmq+iZhzIxLAHDkCb9y0MxJXuM0gSJ9DeD02hQFcVmQtaCpz3TolkR5yS2Y27McsalqDAEyN5XlEB+DUGPtM8CGGzG44nxlWFiMSwDz91LlH2VB2V9N6zAIpX7yNR+KUBcGMRX4MmsKAt4vsTgSJjeGCTLOdU9u5PjY97UTEHx2Ya4sDvotagNPTY9e5wrGh6a6ZNNs5KzvXp822jo0RxJIDkYoClgggOmd6+nqRvVEzMQTdlXseYQWsN4ZFEOsUkd2zhjqhqboNCGchS7KQW8ZgAdmN84sMHjQWw++KHCYlxIBb3HmO7jrIRXKWFurlrc455kY89Oilh27AMau7Us9VGlhXNXKCzilATJgoy/jYt3fv3sUPrsgtm+8mxIDO7hr4gbUhidx/X5oR40EziwSRAN5knoaXW85gwKL07OmxGdxLBrTnkOUEZQ2ERmI/u9NgAC3ECvnM83zLJQ8CEG9Uf92rfTYi6D19zNF7+01PQPQF1wflbgwlQLOFzGTAemAc89zNhP8XYEQjcsIt3EX92me28JDivHeZ8FDlC6CjRn6NEe9zqdA+rqOeOEzo10XJF8CIj9rZQK5+RqmBY9Mfz8yMgSGe3UGCBzndHpuZ+Vjx/Bl0QtT5fxQGGkrtG4MAPj3NX5vJwXuqX4BccdTX+ivKfYwzBJWi+cm5qJ97bZTRD6FWfhqklWPT7Hy6EuzUT9E50QJm1UIFJ7ab5gKdiQNGtK6mICD0G1jolLcnJycwL/UEcn4RJox23yGoc+Zd4fTyzs6yHHF6GZ2CnkUNz4L3PNL5RdMfo1OirZHecBMih5dblrf7Okfo0cOX8043jQmjvbSRdtkB20ge4bAvPbECvtyXYhzBd0d7CW7N5S18CVHI/4o+XlQ+3xMQYi8Vbchfc3l8JUL8pN+vAxNCpImWEOVnGsEI0RrjGX0StXxNISREk5poF1BoZdEKRojSok/pc4xbwQjRydGuLtA0qhSMEH18hz4FNx+MEK0uoi11R0nAw+CEb+3HiQcjRGvMaG/vbrkm3j6E+GMmEyUN+UJC1GeiveME+batQIQfWwGfhHyfIx2EaNxHu7jQXA7fj5AGfL+QLyREoSbaxUWPhCRPMwqE8JAAvHa3RAhluu0gvC09khByin6zfUiWlj6dYQSr1NszMiHv+9Xjm0iP0bTtUHok/Bb8V0MqKsKnz8Ss/WiiVcTJNu/a5n4o8lrbqBEHUEycXSn7tysklVd676L/D2w7+iyrsEA2AAAAAElFTkSuQmCC"
              alt="hj"
            />
          </Col>
          <Col md={4} className="project-card">
            <h1 style={{ backgroundColour: "blue", color: "white" }}>
              Backend
            </h1>
            <img
              src="data:image/png;base64,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"
              alt="1"
              width="200"
              height="100"
            />
            <br />
            <br />
            <img
              src="data:image/png;base64,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"
              alt="1"
              width="200"
              height="100"
            />{" "}
            <br />
            <br />
            <img
              src="data:image/png;base64,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"
              alt="1"
              width="200"
              height="100"
            />{" "}
            <br />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
