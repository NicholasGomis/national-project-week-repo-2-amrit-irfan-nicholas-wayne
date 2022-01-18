## Requirements

### Component Tree

- App
  - Feed
    - Post          
    - add the post 
  - Form                  
      
      - input text - name
      - input text - what the problem      
      - input text - what tried   
      - input text - code
      - button - to submit
    - Nav
      - item text
      - delete button
    - Post
      - input text - comment 
      - button - post comment

    - Section
      - 
      - 
        ...

### App

_state_

- list of post

_behaviour_

- add post to list
- render an Input and List

### Feed

_state_

- list the post 

_props_


_behaviour_

- render the post.
- change of input text will update state of this component
- button click will call the add function from props with value of input

### Form

_props_

- array of to dos
- delete function

_behaviour_

- render an array of ListItems in a `ul`

### List

_props_

- text
- delete function

_behaviour_

- render the text and a button
- when the button is clicked call the delete function to delete item at this index
