import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Hero from "../landing_page/home/Hero";

//Test Suite -- 'multiple test cases ek sath de skte h'
describe("Hero Component", () => {
    test("renders hero image", () =>{
        render(<Hero />);
        const heroImage = screen.getByAltText("HomeHeroImg");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
    });

    test("renders signup button", () => {
        render(<Hero />);
        const signupbutton = screen.getByRole("button", { name: /Signup Now/i });
        expect(signupbutton).toBeInTheDocument();
        expect(signupbutton).toHaveClass("btn-primary");
    });
});