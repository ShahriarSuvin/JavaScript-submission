//Problem 1: Write a function to calculate the area of a triangle.
    function areaOfTriangle(base, height){
        if(base <= 0 || height <= 0){
            return "all must be positive number";
        }else{
            //formula is 1/2*base*height.
            let area = (1 / 2) * base * height;
            return area;
        }
    }

    console.log("The area of the triangle is: " + areaOfTriangle(5,2));