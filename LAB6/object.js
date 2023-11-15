// vertex coordinates: x,y,z
// format: x,y,z
const cubeWithoutNormals = new Float32Array([
    // Front face
    -0.5, -0.5, 0.5,
    0.5, -0.5, 0.5,
    0.5, 0.5, 0.5,
    -0.5, -0.5, 0.5,
    0.5, 0.5, 0.5,
    -0.5, 0.5, 0.5,

    // Back face
    -0.5, -0.5, -0.5,
    -0.5, 0.5, -0.5,
    0.5, 0.5, -0.5,
    -0.5, -0.5, -0.5,
    0.5, 0.5, -0.5,
    0.5, -0.5, -0.5,

    // Top face
    -0.5, 0.5, -0.5,
    -0.5, 0.5, 0.5,
    0.5, 0.5, 0.5,
    -0.5, 0.5, -0.5,
    0.5, 0.5, 0.5,
    0.5, 0.5, -0.5,

    // Bottom face
    -0.5, -0.5, -0.5,
    0.5, -0.5, -0.5,
    0.5, -0.5, 0.5,
    -0.5, -0.5, -0.5,
    0.5, -0.5, 0.5,
    -0.5, -0.5, 0.5,

    // Right face
    0.5, -0.5, -0.5,
    0.5, 0.5, -0.5,
    0.5, 0.5, 0.5,
    0.5, -0.5, -0.5,
    0.5, 0.5, 0.5,
    0.5, -0.5, 0.5,

    // Left face
    -0.5, -0.5, -0.5,
    -0.5, -0.5, 0.5,
    -0.5, 0.5, 0.5,
    -0.5, -0.5, -0.5,
    -0.5, 0.5, 0.5,
    -0.5, 0.5, -0.5,
]);

// vertex coordinates: x,y,z 
// normal coordinates: nx, ny, nz
// format: x,y,z,nx,ny,nz
const cubeWithNormals = new Float32Array([
    // Front face
    -0.5, -0.5, 0.5,  0,  0,  1,
     0.5, -0.5, 0.5,  0,  0,  1,
     0.5,  0.5, 0.5,  0,  0,  1,
    -0.5, -0.5, 0.5,  0,  0,  1,
     0.5,  0.5, 0.5,  0,  0,  1,
    -0.5,  0.5, 0.5,  0,  0,  1,

    // Back face
    -0.5, -0.5, -0.5,  0,  0, -1,
    -0.5,  0.5, -0.5,  0,  0, -1,
     0.5,  0.5, -0.5,  0,  0, -1,
    -0.5, -0.5, -0.5,  0,  0, -1,
     0.5,  0.5, -0.5,  0,  0, -1,
     0.5, -0.5, -0.5,  0,  0, -1,

    // Top face
    -0.5,  0.5, -0.5,  0,  1,  0,
    -0.5,  0.5,  0.5,  0,  1,  0,
     0.5,  0.5,  0.5,  0,  1,  0,
    -0.5,  0.5, -0.5,  0,  1,  0,
     0.5,  0.5,  0.5,  0,  1,  0,
     0.5,  0.5, -0.5,  0,  1,  0,

    // Bottom face
    -0.5, -0.5, -0.5,  0, -1,  0,
     0.5, -0.5, -0.5,  0, -1,  0,
     0.5, -0.5,  0.5,  0, -1,  0,
    -0.5, -0.5, -0.5,  0, -1,  0,
     0.5, -0.5,  0.5,  0, -1,  0,
    -0.5, -0.5,  0.5,  0, -1,  0,

    // Right face
     0.5, -0.5, -0.5,  1,  0,  0,
     0.5,  0.5, -0.5,  1,  0,  0,
     0.5,  0.5,  0.5,  1,  0,  0,
     0.5, -0.5, -0.5,  1,  0,  0,
     0.5,  0.5,  0.5,  1,  0,  0,
     0.5, -0.5,  0.5,  1,  0,  0,

    // Left face
    -0.5, -0.5, -0.5, -1,  0,  0,
    -0.5, -0.5,  0.5, -1,  0,  0,
    -0.5,  0.5,  0.5, -1,  0,  0,
    -0.5, -0.5, -0.5, -1,  0,  0,
    -0.5,  0.5,  0.5, -1,  0,  0,
    -0.5,  0.5, -0.5, -1,  0,  0,
]);
