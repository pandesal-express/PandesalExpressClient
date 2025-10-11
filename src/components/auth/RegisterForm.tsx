import React, { type FC, type Key, useEffect, useState } from "react";
import { Autocomplete, AutocompleteItem, Button, Checkbox, Divider, Form, Input, Link } from "@heroui/react";
import type { Department } from "@/types";
import { Alert } from "@heroui/alert";
import { $regCurrStep, $regData } from "@/lib/states";
import { ArrowRightIcon } from "@heroui/shared-icons";
import { useStore } from "@nanostores/react";

const RegisterForm: FC<{ departments: Department[], serverError: string | null }> = ({departments, serverError}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [position, setPosition] = useState("");
    const [email, setEmail] = useState("");
    const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null);
    const [agreed, setAgreed] = useState(false);

    const regData = useStore($regData);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const storeId = new URLSearchParams(window.location.search).get('storeId')!;

        $regData.set({
            firstname: firstName,
            lastname: lastName,
            email: email,
            position: position,
            departmentId: selectedDepartment!.id,
            storeId: storeId,
            agreed: agreed,
        });
        $regCurrStep.set(1);
    }

    const handleSelectDepartment = (id: Key | null) => {
        if (!id) {
            setSelectedDepartment(null);
            return;
        }

        const department = departments.find((department) => department.id === id) ?? null;
        setSelectedDepartment(department);
    }

    useEffect(() => {
        const notEmpty = Object.values(regData).every((value) => value !== '');
        if (notEmpty) {
            setFirstName(regData.firstname);
            setLastName(regData.lastname);
            setPosition(regData.position);
            setEmail(regData.email);
            setAgreed(regData.agreed);
            setSelectedDepartment(departments.find((department) => department.id === regData.departmentId) ?? null);
        }
    }, []);

    return (
        <Form
            id='registerForm'
            className='flex flex-col gap-4 max-w-md'
            validationBehavior='native'
            onSubmit={handleSubmit}
        >
            <Input
                isRequired
                label='Email'
                labelPlacement='outside'
                name='email'
                placeholder='Enter your email'
                type='email'
                variant='bordered'
                value={email}
                onValueChange={setEmail}
            />

            <Divider />

            <Input
                isRequired
                label='First Name'
                labelPlacement='outside'
                name='firstname'
                placeholder='Enter your first name'
                type='text'
                variant='bordered'
                value={firstName}
                onValueChange={setFirstName}
                validate={(value) => {
                    return (value.length > 0) ? true : "First name is required";
                }}
            />
            <Input
                isRequired
                label='Last Name'
                labelPlacement='outside'
                name='lastname'
                placeholder='Enter your last name'
                type='text'
                variant='bordered'
                value={lastName}
                onValueChange={setLastName}
                validate={(value) => {
                    return (value.length > 0) ? true : "Last name is required";
                }}
            />
            <Input
                isRequired
                label='Position'
                labelPlacement='outside'
                name='position'
                placeholder='Enter your position'
                type='text'
                variant='bordered'
                value={position}
                onValueChange={setPosition}
                validate={(value) => {
                    return (value.length > 0) ? true : "Position is required";
                }}
            />

            {/* Autocomplete */}
            <Autocomplete
                isRequired
                aria-label='Department Select'
                label='Department'
                labelPlacement='outside'
                placeholder='Select department...'
                className='max-w-sm'
                variant='bordered'
                defaultItems={departments}
                selectedKey={selectedDepartment?.id ?? null}
                onSelectionChange={handleSelectDepartment}
                validate={(value) => {
                    if (!value) {
                        return "Please select a department";
                    }

                    return true;
                }}
            >
                {(e) => (
                    <AutocompleteItem key={e.id} textValue={e.name}>
                        {e.name}
                    </AutocompleteItem>
                )}
            </Autocomplete>

            <Checkbox isRequired className='py-4' size='sm' checked={agreed} onValueChange={setAgreed}>
                I agree with the&nbsp;
                <Link className='relative z-[1]' href='#' size='sm'>
                    Terms
                </Link>
                &nbsp; and&nbsp;
                <Link className='relative z-[1]' href='#' size='sm'>
                    Privacy Policy
                </Link>
            </Checkbox>

            {serverError && <Alert color='danger' variant='solid' className='my-2' description={serverError} />}

            <Button
                color='primary'
                type='submit'
                isDisabled={serverError != null}
                endContent={<ArrowRightIcon />}
                fullWidth
            >
                Proceed to Face Register
            </Button>
        </Form>
    );
}

export default RegisterForm;
