export default function HelloWorld(request, response) {
  response.status(200).json({
    body: 'Hello, world!'
  });
}