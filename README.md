# CampCoApp


# Define the menu dictionary
menu = {
    "1": "MACARONI & CHEESE ",
    "2": "ONION RINGS",
    "3": "Option 3",
    "4": "Option 4",
    "5": "Exit"
}

# Define a function to display the menu
def display_menu():
    print("Menu:")
    for key, value in menu.items():
        print(f"{key}. {value}")

# Define a loop to display the menu and get user input
while True:
    display_menu()
    choice = input("Enter your choice: ")

    # Execute the user's choice
    if choice == "1":
        print("Option 1 selected")
    elif choice == "2":
        print("Option 2 selected")
    elif choice == "3":
        print("Option 3 selected")
    elif choice == "4":
        print("Option 4 selected")
    elif choice == "5":
        print("Exiting...")
        break
    else:
        print("Invalid choice. Please try again.")

