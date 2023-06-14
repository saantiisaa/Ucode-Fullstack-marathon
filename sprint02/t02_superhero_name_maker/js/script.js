let animalName = prompt('What animal is the superhero most similar to?');
let animalNameRegex = RegExp('^[a-zA-Z]+$');

if (!animalNameRegex.test(animalName) || animalName.length > 20) {
    alert('Wrong input data!')

} else {
    let gender = prompt('Is the superhero male or female? Leave blank if unknown or other.');
    let genderRegex = RegExp('^male$|^female$|^$', 'i');

    if (!genderRegex.test(gender)) {
        alert('Wrong input data!');

    } else {
        let superheroAge = prompt('How old is the superhero?');
        let ageRegex = RegExp('^[1-9]+[0-9]*$');

        if (!ageRegex.test(superheroAge)) {
            alert('Wrong input data!')
        } else {
            if (RegExp('^male$', 'i').test(gender) && superheroAge < 18) {
                description = "boy";
            }
            else if (RegExp('^male$', 'i').test(gender) && superheroAge >= 18) {
                description = "man";
            }
            else if (RegExp('^female$', 'i').test(gender) && superheroAge < 18) {
                description = "girl";
            }
            else if (RegExp('^female$', 'i').test(gender) && superheroAge >= 18) {
                description = "woman";
            }
            else if (RegExp('^$').test(gender) && superheroAge < 18) {
                description = "kid";
            }
            else if (RegExp('^$').test(gender) && superheroAge >= 18) {
                description = "hero";
            }

            alert('The superhero name is: ' + animalName + '-' + description + '!');
        }
    }
}
